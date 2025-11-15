import { useState, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: string;
  originalPrice?: string;
  image: string;
  affiliateLink: string;
  featured: boolean;
  trending: boolean;
}

const categories = [
  { id: 'health-fitness', name: 'Health & Fitness' },
  { id: 'digital-marketing', name: 'Digital Marketing' },
  { id: 'make-money', name: 'Make Money Online' },
  { id: 'self-improvement', name: 'Self-Improvement' },
  { id: 'software-tools', name: 'Software & Tools' },
  { id: 'ebooks-courses', name: 'eBooks & Courses' }
];

export default function AdminPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    description: '',
    category: 'health-fitness',
    price: '',
    originalPrice: '',
    image: '',
    affiliateLink: '',
    featured: false,
    trending: false
  });

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      setProducts(JSON.parse(stored));
    } else {
      fetch('/src/data/products.json')
        .then(res => res.json())
        .then(data => {
          setProducts(data);
          localStorage.setItem('products', JSON.stringify(data));
        })
        .catch(() => {});
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (editingId) {
      const updated = products.map(p => 
        p.id === editingId ? { ...formData, id: editingId } as Product : p
      );
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
      setEditingId(null);
    } else {
      const newProduct: Product = {
        ...formData,
        id: Date.now().toString()
      } as Product;
      const updated = [...products, newProduct];
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
    }
    
    setFormData({
      name: '',
      description: '',
      category: 'health-fitness',
      price: '',
      originalPrice: '',
      image: '',
      affiliateLink: '',
      featured: false,
      trending: false
    });
  };

  const handleEdit = (product: Product) => {
    setFormData(product);
    setEditingId(product.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      name: '',
      description: '',
      category: 'health-fitness',
      price: '',
      originalPrice: '',
      image: '',
      affiliateLink: '',
      featured: false,
      trending: false
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">
          {editingId ? 'Edit Product' : 'Add New Product'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Price *
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="$47"
                required
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Original Price
              </label>
              <input
                type="text"
                name="originalPrice"
                value={formData.originalPrice || ''}
                onChange={handleInputChange}
                placeholder="$197"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={3}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Image URL *
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                required
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Affiliate Link *
              </label>
              <input
                type="url"
                name="affiliateLink"
                value={formData.affiliateLink}
                onChange={handleInputChange}
                required
                placeholder="https://example.com/affiliate/product"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured || false}
                  onChange={handleInputChange}
                  className="w-5 h-5"
                />
                Featured
              </label>
              
              <label className="flex items-center gap-2 text-gray-300">
                <input
                  type="checkbox"
                  name="trending"
                  checked={formData.trending || false}
                  onChange={handleInputChange}
                  className="w-5 h-5"
                />
                Trending
              </label>
            </div>
          </div>
          
          <div className="flex gap-3 pt-4">
            <button type="submit" className="btn">
              {editingId ? 'Update Product' : 'Add Product'}
            </button>
            {editingId && (
              <button type="button" onClick={handleCancel} className="btn bg-gray-600 hover:bg-gray-500">
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-white">
          Products ({products.length})
        </h2>
        
        <div className="space-y-4">
          {products.map(product => (
            <div key={product.id} className="bg-gray-700 rounded-lg p-4 flex gap-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-24 h-24 object-cover rounded"
              />
              
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{product.name}</h3>
                    <p className="text-sm text-gray-400">{product.category}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(product)}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-500 rounded text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <p className="text-sm text-gray-300 mb-2">{product.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-primary font-bold">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                  {product.featured && <span className="text-yellow-400">⭐ Featured</span>}
                  {product.trending && <span className="text-red-400">🔥 Trending</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

# OpenClaw Agent - Quick Reference Guide

## ⚠️ Current Status

### ✅ Working
- OpenClaw Gateway: Running
- Telegram: CAN SEND messages to you
- Agent: Responding to terminal commands
- All documentation: Created and ready

### ⚠️ Not Working (Being Debugged)
- Telegram: NOT receiving messages from you yet
- Bot can send, but can't receive

---

## 🚀 How to Use the Agent Right Now

### Option 1: Using the `agent` Command (Recommended)

```bash
# First, add to PATH (run once per session)
source ~/.bashrc

# Then use the agent command
agent "Your message or task here"
```

**Examples:**
```bash
agent "Hello, can you hear me?"
agent "Create daily social media content"
agent "Generate progress report"
agent "Start Day 1: Create social media accounts"
```

### Option 2: Interactive Session

```bash
# Start interactive chat
source ~/.bashrc
agent-chat

# Then type your messages directly
```

### Option 3: Full Path (Always Works)

```bash
/home/garyp/.config/nvm/versions/node/v24.13.0/bin/openclaw agent --agent main -m "Your task"
```

---

## 📋 Daily Workflow Examples

### Morning Routine
```bash
agent "Execute Day 1 morning routine:
1. Create 1 graphic for Testosil product spotlight
2. Write captions for Instagram and Facebook
3. Generate Instagram story idea
4. Report what was created"
```

### Progress Report
```bash
agent "Generate daily progress report:
- Visitors today (from PostHog)
- Content created
- Social posts scheduled
- Engagement metrics
- Tomorrow's plan"
```

### Content Creation
```bash
agent "Create Instagram caption for the blog post 'Ultimate Guide to Male Enhancement'. Use WEEK1_CONTENT_CALENDAR.md templates."
```

### Reddit Engagement
```bash
agent "Write a helpful Reddit comment about L-Arginine for r/Supplements. Follow REDDIT_ENGAGEMENT_STRATEGY.md guidelines. No links, pure value."
```

---

## 📂 Key File Locations

### Project Documentation
```
/home/garyp/astro-affiliate-site/
├── START_HERE.md (begin here)
├── OPENCLAW_AGENT_GUIDE.md (detailed guide)
├── DAY1_START_HERE.md (Day 1 tasks)
├── DAILY_WORKFLOW_CHECKLIST.md (30-day tracker)
├── SOCIAL_MEDIA_ACCOUNT_SETUP.md (account setup)
├── WEEK1_CONTENT_CALENDAR.md (Week 1 content)
├── KIE_AI_GRAPHICS_LIBRARY.md (25+ prompts)
├── REDDIT_ENGAGEMENT_STRATEGY.md (Reddit guide)
├── PINTEREST_STRATEGY.md (50 pin templates)
└── SEO_QUICK_WINS_GUIDE.md (Week 4 SEO)
```

### Agent Configuration
```
/home/garyp/.openclaw/
├── agents/main/agent/
│   ├── IDENTITY.md (agent persona)
│   └── MARKETING_CAMPAIGN_BRIEF.md (strategy)
└── workspace/
    └── thebestoffersaround/ (project workspace)
```

---

## 🎯 Quick Start Commands

### Start the Campaign
```bash
# Begin Day 1
agent "Execute Day 1: Create all social media accounts following SOCIAL_MEDIA_ACCOUNT_SETUP.md. Report each account as created."
```

### Daily Tasks
```bash
# Create today's content
agent "Create today's social media content for Instagram and Facebook. Use prompts from KIE_AI_GRAPHICS_LIBRARY.md."

# Generate progress report
agent "Generate daily progress report and send to Telegram."
```

### Weekly Summary
```bash
agent "Create weekly summary report with:
- Total visitors (cumulative)
- Follower growth
- Top 3 performing posts
- Key learnings
- Next week's strategy adjustments"
```

---

## 🛠️ Troubleshooting

### Agent Not Responding
```bash
# Check gateway status
systemctl --user status openclaw-gateway.service

# Restart gateway if needed
systemctl --user restart openclaw-gateway.service

# Test agent
agent "Test connection"
```

### Command Not Found
```bash
# Add to PATH
source ~/.bashrc

# Or use full path
/home/garyp/.config/nvm/versions/node/v24.13.0/bin/openclaw agent --agent main -m "test"
```

### View Agent Logs
```bash
# Check sessions
cat /home/garyp/.openclaw/agents/main/sessions/sessions.json
```

---

## 📊 Telegram Status

### Current Configuration
- **Bot:** @Gmanfit_bot
- **Status:** Sending ✅ / Receiving ❌
- **dmPolicy:** allowlist (enabled)
- **Your ID:** 6167877734 (in allowlist)
- **Gateway:** Running

### What Works
- ✅ Agent sends messages to Telegram
- ✅ You receive updates on Telegram
- ✅ All terminal commands work

### What's Being Debugged
- ❌ Bot not receiving your messages
- ❌ Two-way communication not working yet

### Workaround
Use terminal commands (see above) - they work perfectly!

---

## 💡 Tips

1. **Always source ~/.bashrc first** in new terminal sessions
2. **Use quotes** around your message: `agent "your message"`
3. **Be specific** with tasks for better results
4. **Reference documentation** - agent can read all project files
5. **Start simple** - test with basic commands first

---

## 📞 Getting Help

If something isn't working:

1. **Check the gateway:**
   ```bash
   systemctl --user status openclaw-gateway.service
   ```

2. **Run doctor:**
   ```bash
   /home/garyp/.config/nvm/versions/node/v24.13.0/bin/openclaw doctor
   ```

3. **Test with simple command:**
   ```bash
   agent "Hello"
   ```

4. **Check documentation:**
   - Read `OPENCLAW_AGENT_GUIDE.md` for detailed info
   - Read `START_HERE.md` for campaign overview

---

**Last Updated:** 2026-02-07
**Agent Status:** ✅ Operational via terminal
**Telegram Status:** ⚠️ Sending works, receiving being debugged

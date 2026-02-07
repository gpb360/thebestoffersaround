# OpenClaw Marketing Agent - Quick Start Guide

## ✅ System Status

**OpenClaw Gateway:** Running (systemd service)
**Telegram:** Connected (@Gmanfit_bot)
**Agent Mode:** Marketing Specialist
**Communication:** One-way (Telegram → reports to user)

## 🚀 How to Use the Agent

### Option 1: Via Terminal

```bash
# Add OpenClaw to PATH (add to ~/.bashrc)
export PATH="$PATH:/home/garyp/.config/nvm/versions/node/v24.13.0/bin"

# Then you can use:
openclaw agent "Your command here"
```

### Option 2: Direct Binary

```bash
/home/garyp/.config/nvm/versions/node/v24.13.0/bin/openclaw agent "Your task"
```

### Option 3: Via Telegram (Recommended)

The agent will send progress reports to Telegram. For detailed tasks, use the terminal and receive summaries via Telegram.

## 📋 Agent Capabilities

The agent can help with:

### Content Creation
- Create social media graphics (using KIE.AI prompts)
- Write captions for Instagram, Facebook, Twitter, LinkedIn
- Generate Twitter threads
- Create Pinterest pin descriptions

### Daily Tasks
- Schedule posts via Missinglettr
- Create graphics for the day
- Generate engagement comments
- Report analytics from PostHog

### Community Engagement
- Draft Reddit comments (following 90/10 rule)
- Create Facebook group responses
- Write Quora answers
- Generate engagement scripts

### Analytics & Reporting
- Check PostHog for visitor stats
- Track follower growth
- Analyze top-performing content
- Generate daily/weekly reports

### SEO Tasks
- Optimize blog post meta descriptions
- Generate FAQ sections
- Create internal linking suggestions
- Write image alt text

## 💬 Example Commands

### Create Daily Content
```bash
openclaw agent "Create today's social media content for Instagram and Facebook. Use prompts from KIE_AI_GRAPHICS_LIBRARY.md. Focus on Testosil product spotlight."
```

### Generate Graphics Prompts
```bash
openclaw agent "Generate KIE.AI prompts for 5 Pinterest pins about male enhancement. Reference PINTEREST_STRATEGY.md"
```

### Write Reddit Comments
```bash
openclaw agent "Write a helpful Reddit comment about L-Arginine for r/Supplements. Follow REDDIT_ENGAGEMENT_STRATEGY.md guidelines. No links, pure value."
```

### Daily Progress Report
```bash
openclaw agent "Generate daily progress report. Check PostHog analytics, summarize today's achievements, list tomorrow's tasks."
```

### Weekly Summary
```bash
openclaw agent "Create weekly summary report. Include total visitors, follower growth, top content, lessons learned, and next week's focus."
```

### Create Social Media Captions
```bash
openclaw agent "Write Instagram, Facebook, and Twitter captions for the blog post 'Ultimate Guide to Male Enhancement'. Use WEEK1_CONTENT_CALENDAR.md templates."
```

## 📊 Daily Workflow (Automated)

Ask the agent to run the daily routine:

```bash
openclaw agent "Execute Day 1 morning routine:
1. Create 1 graphic for Testosil product spotlight
2. Write captions for Instagram and Facebook
3. Generate Instagram story idea
4. Report what was created"
```

## 📈 Reporting

The agent can send reports to Telegram:

### Daily Report
```bash
openclaw agent "Send daily progress report to Telegram with:
- Visitors today (from PostHog)
- Content created
- Social posts scheduled
- Engagement metrics
- Tomorrow's plan"
```

### Weekly Report
```bash
openclaw agent "Send weekly summary to Telegram with:
- Total visitors (cumulative)
- Follower growth
- Top 3 performing posts
- Key learnings
- Next week's strategy adjustments"
```

## 🎯 Current Campaign Status

**Project:** 30-Day Traffic Strategy
**Site:** https://thebestoffersaround.com
**Goal:** 1,000 visitors in 30 days
**Current Phase:** Day 0 (Setup/Planning)
**Next Action:** Create social media accounts (Day 1)

## 📁 Key Files Reference

All documentation at: `/home/garyp/astro-affiliate-site/`

**Start Here:**
- `START_HERE.md` - Overview
- `DAY1_START_HERE.md` - Day 1 tasks

**Daily Reference:**
- `DAILY_WORKFLOW_CHECKLIST.md` - 30-day tracker
- `KIE_AI_GRAPHICS_LIBRARY.md` - 25+ graphic prompts
- `WEEK1_CONTENT_CALENDAR.md` - Week 1 content

**Strategy:**
- `SOCIAL_MEDIA_ACCOUNT_SETUP.md` - Account setup
- `REDDIT_ENGAGEMENT_STRATEGY.md` - Reddit guide
- `PINTEREST_STRATEGY.md` - 50 pin templates
- `SEO_QUICK_WINS_GUIDE.md` - Week 4 SEO

**Agent Briefing:**
- `/home/garyp/.openclaw/agents/main/agent/MARKETING_CAMPAIGN_BRIEF.md`
- `/home/garyp/.openclaw/agents/main/agent/IDENTITY.md`

## ⚡ Quick Start Commands

### Begin Day 1
```bash
openclaw agent "Start Day 1: Create all social media accounts. Follow SOCIAL_MEDIA_ACCOUNT_SETUP.md step by step. Report each account as created."
```

### Create Day 2 Graphics
```bash
openclaw agent "Execute Day 2: Create 15 graphics using KIE.AI prompts from KIE_AI_GRAPHICS_LIBRARY.md. Save to appropriate folders."
```

### Start Daily Posting (Day 4)
```bash
openclaw agent "Begin daily posting routine. Create content, schedule posts, engage communities, send progress report."
```

## 🔧 Troubleshooting

### Gateway Not Running
```bash
systemctl --user start openclaw-gateway.service
systemctl --user status openclaw-gateway.service
```

### Telegram Not Working
```bash
# Test connection
openclaw message send --channel telegram --target 6167877734 --message "Test"
```

### Agent Errors
```bash
# Run doctor
openclaw doctor
```

## 📞 Communication

**To User:** Send reports and updates via Telegram
**From User:** Send commands via terminal or wait for automated reports

The agent will proactively report:
- ✅ Tasks completed
- 📊 Analytics data
- ⚠️ Issues or blockers
- 💡 Recommendations

---

**Ready to execute the 30-day marketing campaign!** 🚀

Last updated: 2026-02-07

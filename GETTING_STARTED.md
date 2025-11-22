# 🚀 Getting Started Guide

Welcome! This guide will help new contributors make their first contribution easily and confidently.

---

## 1. ⭐ How to Fork the Repository

1. Go to the main project repository.
2. Click the **Fork** button in the top-right.
3. Choose your GitHub account.

You now have your own copy of the project at:  
https://github.com/YOUR_USERNAME/ai-community-hub

---

## 2. 📥 How to Clone and Create a New Branch

### Clone your fork:
```bash
git clone https://github.com/YOUR_USERNAME/ai-community-hub.git
cd ai-community-hub
```

### Add a reference(remote) to the original repository:
```bash
git remote add https://github.com/Aariyatech-UK/ai-community-hub.git
```

### Check the remotes for this repository:
```bash
git remote -v
```

### Always take a pull from the upstream repository to your master branch to keep it at par with the main project (updated repository):
```bash
git pull upstream master
```

### **Create a new branch:**
```bash
git checkout -b <your-branch-name>
```

Examples of branch names:

- feature/update-docs  
- docs/getting-started  
- fix/typo  

---

## 3. ✏️ **How to Submit a Pull Request (PR)**

1. Make your changes.

2. Stage and commit:
```bash
git add .
git commit -m "docs: add getting started guide"
```

3. Push the branch to your fork:
```bash
git push origin <your-branch-name>
```

4. Go to your fork on GitHub → click **Compare & Pull Request**.
5. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.
6. Add appropriate title and description to your pull request explaining your changes and efforts done.   

7. (Important) Link Your PR to an Issue

If your pull request fixes or completes an open issue, add one of the following keywords in your PR description:

- `Closes #<issue-number>`
- `Fixes #<issue-number>`
- `Resolves #<issue-number>`

#### ✅ Example:
If your PR solves Issue #2, at the end of the description write:
`Closes #2`

This ensures GitHub will automatically close the issue once your PR is merged.

8. Submit the PR by clicking on `Create Pull Request`.
9. Sit back patiently and relax while the project maintainers review your PR. Please understand, at times the time taken to review a PR can vary from a few hours to a few days.



---

## 4. 💬 **Where to Ask Questions**

Use the **Discussions** tab on GitHub.

You can ask about:

- Getting started  
- Issues  
- Project ideas  
- Feedback  
- Help with contributions  

Friendly community support is always available!

---

## 5. 🎯 How to Pick a “Good First Issue”

Look for labels such as:

- **good first issue**  
- **documentation**  
- **help wanted**  
- **beginner-friendly**  

If you're unsure, comment on the issue:

> “Hi, I’m new! Can I work on this issue?”

A maintainer will guide you.

---

## 🎉 You're Ready!

You now know how to:

✔️ Fork  
✔️ Clone  
✔️ Branch  
✔️ Commit  
✔️ Push  
✔️ Submit a PR  
✔️ Ask questions  
✔️ Pick beginner issues  

Happy contributing! 🎉





Repository rewrite — collaborator instructions

We recently rewrote the repository history to remove a bot author and purge a leaked GitHub token. The remote has been force-updated.

What happened:
- Rewrote git history to remove `Lovable <noreply@lovable.dev>` and purge leaked token strings.
- Force-pushed cleaned history to origin.

Actions for contributors (recommended)

- Easiest (recommended): fresh clone

```bash
git clone https://github.com/arunchavan4499/arunchavan.git
```

- If you must preserve local commits:

1. Create a backup branch:

```bash
git checkout -b my-local-backup
```

2. Export patches from your local branch (example):

```bash
git format-patch origin/main..my-branch -o ~/patches
```

After re-cloning, apply them:

```bash
git am ~/patches/*.patch
```

- If you can discard local changes, you can hard-reset:

```bash
git fetch origin
git checkout main
git reset --hard origin/main
```

Actions for repository admins

- Revoke the leaked GitHub PAT immediately:
  - GitHub -> Settings -> Developer settings -> Personal access tokens -> Revoke the token that starts with `ghp_`.
- Create a new PAT with minimal required scopes and update Netlify environment variable `GITHUB_TOKEN`.
- Verify Netlify functions + deploy:

```bash
netlify env:set GITHUB_TOKEN <new_token>
netlify env:set VITE_GITHUB_USERNAME arunchavan4499
netlify deploy --prod --dir=dist --functions=netlify/functions
```

Questions or help

If you want, I can:
- prepare the new PAT value in Netlify (if you provide it securely), or
- post a short issue in the repo tagging contributors with these instructions.

If you're unsure, re-clone — it's the safest option.

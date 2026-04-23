Token rotation & Netlify environment setup

This repository had a leaked GitHub Personal Access Token (PAT) in a previous build. The repository history has been rewritten to remove it, but you must still revoke the old token and rotate credentials.

1) Revoke the old token (required)

- Go to GitHub: Settings → Developer settings → Personal access tokens → Personal access tokens (classic)
- Revoke any token that starts with `ghp_` and that you don't recognize.

2) Create a new token (recommended minimal scopes)

- Scopes: `public_repo` (if the function only needs public data) and `read:user`.
- Create the token and copy it (you will not see it again).

3) Set the token in Netlify (server-only)

Using the Netlify CLI (recommended):

```bash
netlify login
netlify link # follow prompts to link to the site
netlify env:set GITHUB_TOKEN <new_token>
netlify env:set VITE_GITHUB_USERNAME arunchavan4499
```

Alternatively, in the Netlify UI:
- Site settings → Build & deploy → Environment → Environment variables → Add `GITHUB_TOKEN` and `VITE_GITHUB_USERNAME`.

4) Redeploy the site

```bash
netlify deploy --prod --dir=dist --functions=netlify/functions
```

5) Verify

- After deploy, inspect the new `dist` build (search for `ghp_`) and confirm no token strings are present.
- Test the heatmap endpoint (frontend or Netlify function) to ensure it works.

If you want, provide the new token and I can run the Netlify env commands for you locally (I will not store the token). Otherwise follow the UI steps above.

---
name: add-resource
description: Add a job-search resource (site, repo, blog, book, tool) to the hire-me guide in the right stage, alphabetized, with a link and one sentence, then lint and open a PR. Use when asked to add, suggest or include a resource in hire-me.
---

# Add a resource to hire-me

1. **Pick the stage.** Read `docs/_sidebar.md` and pick the page the resource fits: `01-prepare` (practice and prep), `02-search` (finding openings, company research), `03-apply` (resumes, cover letters, online presence), `04-interview` (intros, questions, follow-up) or `05-accept` (offers, salary). Each stage's `README.md` is its landing page. If nothing fits, ask before creating a page; a new page also needs a `docs/_sidebar.md` entry.
2. **Check it's not already there.** `grep -ri "<name or domain>" docs/`.
3. **Check the link.** Open the URL and confirm it loads and is free to use. No affiliate links, paywalled courses or self-promotion unless the PR says so.
4. **Add the entry** under the right `## Group`, in alphabetical order among the `### Name` headings:

   ```markdown
   ### Name

   [Name](https://example.com) is ... (one sentence on what it offers job seekers).
   ```

   On pages that use a plain list instead of headings (like Job Boards in `docs/02-search/README.md`), add one `- [Name](https://example.com) - what it offers` line in alphabetical order, with any emoji from that section's emoji key. Use 2 spaces, no tabs, no trailing whitespace.
5. **Update the TOC.** If the page has a `<!-- TOC depthFrom:2 -->` block, add the new heading to it by hand in the same position.
6. **Run the checks:**

   ```bash
   npx markdownlint-cli2 "**/*.md" "#node_modules" "#.github"
   lychee --exclude workatastartup.com --exclude keyvalues.com docs/<changed-file>.md   # if installed
   ```

7. **Open the PR** titled `Add <resource>`, one resource per PR, filling in `.github/PULL_REQUEST_TEMPLATE.md`. Leave the Credits item unchecked; agents don't add themselves to Credits.

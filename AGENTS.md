# AGENTS.md

Guidance for AI coding agents (Claude Code, Copilot, Codex, and others) working in this repository. Humans should read [CONTRIBUTING.md](CONTRIBUTING.md).

## What this repo is

A guide to landing a tech job, published with [docsify](https://docsify.js.org) at [francescoronel.github.io/hire-me](https://francescoronel.github.io/hire-me/). All content is Markdown in `docs/`, organized by stage: `01-prepare`, `02-search`, `03-apply`, `04-interview`, `05-accept`. Navigation lives in `docs/_sidebar.md`.

## Adding content or resources

- Put it in the stage it belongs to. If you add a new page, add it to `docs/_sidebar.md`.
- Every resource needs a working link and a sentence on what it offers job seekers.
- Keep list items alphabetized. Use 2 spaces, no tabs, no trailing whitespace.
- No affiliate links, paywalled courses or self-promotion without saying so in the PR.

## Pull requests

- One topic per PR, with a clear title like `Add salary negotiation resource`.
- Fill in the PR template, including the checklist. PRs that skip the template may be closed.
- Don't edit workflows or Dependabot config in a content PR.

## Checks

CI comes from the shared workflows in [FrancesCoronel/workflows](https://github.com/FrancesCoronel/workflows) (Markdown lint and link checks).

To preview the site locally, run `npx docsify-cli serve docs` and open <http://localhost:3000>. Site config (theme, plugins, sidebar) is in `docs/index.html`; keep its CDN scripts pinned to a major version.

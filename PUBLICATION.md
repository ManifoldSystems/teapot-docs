# Open-source publication checklist

The agent, control plane, app, and Python client are public and MIT licensed. The web and docs repositories are also public, but do not yet declare their own licenses. This checklist tracks publication work; public visibility alone does not establish a license or prove a security review is complete.

- [ ] Choose licenses with the owner and add matching `LICENSE` files to the agent, control, app, Python, web, and docs repositories. The public web and docs repos currently have no license: public visibility alone does not grant reuse rights. Verify third-party attribution and dependencies separately.
- [ ] Remove secrets and sensitive history from each repository and verify the entire Git history, not just the current working tree. Rotate any exposed credentials before publication.
- [ ] Review URLs, device names, public IPs, fleet details, screenshots, and logs in examples, tests, docs, assets, and Git history.
- [ ] Verify all getting-started commands against a clean machine. Distribution is source-only: users build their own binaries, APKs, and Python packages. Do not publish prebuilt artifacts or advertise installers/package-registry releases.
- [ ] Decide on a public support/security reporting path and add appropriate contributor/security guidance.
- [ ] Verify all documentation and marketing links and redirects, and keep the authenticated control dashboard separate. The docs are at `https://teapot-docs.vercel.app/` and the marketing site at `https://teapot-iroh.vercel.app/`.
- [ ] Confirm which repositories can be made public together; avoid broken links to still-private dependencies.
- [ ] Run tests/builds and obtain the owner's approval before changing GitHub repository visibility or deploying a site.

# Open-source publication checklist

This is a preparation checklist, **not** a declaration that the whole Teapot project is already open source. The web and docs repositories are public at the owner's request; the agent, control plane, app, and Python client remain private. Review each item before publishing the remaining repositories or announcing an OSS release.

- [ ] Choose licenses with the owner and add matching `LICENSE` files to the agent, control, app, Python, web, and docs repositories. The public web and docs repos currently have no license: public visibility alone does not grant reuse rights. Verify third-party attribution and dependencies separately.
- [ ] Remove secrets and sensitive history from each repository and verify the entire Git history, not just the current working tree. Rotate any exposed credentials before publication.
- [ ] Review URLs, device names, public IPs, fleet details, screenshots, and logs in examples, tests, docs, assets, and Git history.
- [ ] Verify all getting-started commands against a clean machine and confirm whether binaries/APKs/packages are actually published before advertising installation commands.
- [ ] Decide on a public support/security reporting path and add appropriate contributor/security guidance.
- [ ] Verify the documentation deployment, links and redirects, and keep the authenticated control dashboard separate. The marketing site is at `https://teapot-iroh.vercel.app/`; the docs deployment is not yet available.
- [ ] Confirm which repositories can be made public together; avoid broken links to still-private dependencies.
- [ ] Run tests/builds and obtain the owner's approval before changing GitHub repository visibility or deploying a site.

# Contributing to the guides

Thanks for helping make Teapot easier to use. Site pages live in `content/docs/*.mdx` and can be previewed locally with `bun run dev`. Keep a guide focused on a task, include commands that work with the current code, and prefer internal site paths (`/quickstart`, etc.) for other pages.

Check claims against the relevant implementation README before proposing a change. The [agent protocol spec](https://github.com/ManifoldSystems/teapot/blob/main/docs/protocol.md) owns the wire format; change it in the agent repo first, then update the guides. Do not include live admin credentials, device identifiers, secret keys, or unredacted operational logs in issues or examples.

Before publishing or accepting external contributions, the owner needs to choose and add a license and a contact/reporting path; see [PUBLICATION.md](PUBLICATION.md).

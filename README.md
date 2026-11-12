# Teapot documentation

Guides for [Teapot](https://github.com/ManifoldSystems/teapot): connect your devices over iroh and send HTTP traffic out through an exit node you control.

## Start here

The documentation deployment is not available yet; read the source on GitHub:

1. [Introduction](content/docs/index.mdx) — what Teapot does and what it doesn't.
2. [Quickstart](content/docs/quickstart.mdx) — approve two devices and test an exit.
3. [Android exit node](content/docs/android.mdx) — use a phone's mobile connection.
4. [Choose an exit](content/docs/choose-an-exit.mdx) — proxy defaults, per-request names, and Python.
5. [How it works](content/docs/architecture.mdx) — control vs. data path, access and limits.
6. [Troubleshooting](content/docs/troubleshooting.mdx) — approval, exits and connectivity.

## Source of truth

These are **user guides**, not the wire-protocol specification. Consult the [agent's protocol](https://github.com/ManifoldSystems/teapot/blob/main/docs/protocol.md) for message formats. Consult the [agent](https://github.com/ManifoldSystems/teapot), [control plane](https://github.com/ManifoldSystems/teapot-control), [Android app](https://github.com/ManifoldSystems/teapot-app), and [Python client](https://github.com/ManifoldSystems/teapot-py) READMEs for current commands and features. Change behavior/spec there before updating these guides.

The agent, control plane, Android app, and Python client repositories are still private while being prepared for open source; links to those repos require GitHub org access for now. The live dashboard at `https://teapot.example.com` is a separate, authenticated service.

## Run locally

The site uses Next.js + Fumadocs, following the layout of `Orvix-id/docs`.

```bash
bun install
bun run dev
```

Visit `http://localhost:3000`. `bun run build` checks the production build. Edit `content/docs/*.mdx` for site content and `content/docs/meta.json` for sidebar ordering.

## Contribute / publish

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [publication checklist](PUBLICATION.md). No license is declared yet: public visibility does not grant reuse rights. Choose one with the project owner before inviting reuse or external contributions. Do not copy credentials, real device identifiers, or production logs into examples.

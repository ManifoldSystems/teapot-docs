# Teapot documentation

Guides for [Teapot](https://github.com/ManifoldSystems/teapot): connect your devices over iroh and send HTTP traffic out through an exit node you control.

## Start here

1. [Introduction](guides/index.md) — what Teapot does and what it doesn't.
2. [Quickstart](guides/quickstart.md) — approve two devices and test an exit.
3. [Android exit node](guides/android.md) — use a phone's mobile connection.
4. [Choose an exit](guides/choose-an-exit.md) — proxy defaults, per-request names, and Python.
5. [How it works](guides/architecture.md) — control vs. data path, access and limits.
6. [Troubleshooting](guides/troubleshooting.md) — approval, exits and connectivity.

## Source of truth

These are **user guides**, not the wire-protocol specification. Consult the [agent's protocol](https://github.com/ManifoldSystems/teapot/blob/main/docs/protocol.md) for message formats. Consult the [agent](https://github.com/ManifoldSystems/teapot), [control plane](https://github.com/ManifoldSystems/teapot-control), [Android app](https://github.com/ManifoldSystems/teapot-app), and [Python client](https://github.com/ManifoldSystems/teapot-py) READMEs for current commands and features. Change behavior/spec there before updating these guides.

The agent, control plane, Android app, and Python client repositories are still private while being prepared for open source; links to those repos require GitHub org access for now. This docs repo has no live site or automatic deployment yet. The live dashboard at `https://teapot.example.com` is a separate, authenticated service.

## Contribute / publish

See [CONTRIBUTING.md](CONTRIBUTING.md) and the [publication checklist](PUBLICATION.md). No license is declared yet: public visibility does not grant reuse rights. Choose one with the project owner before inviting reuse or external contributions. Do not copy credentials, real device identifiers, or production logs into examples.

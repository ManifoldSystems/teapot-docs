# How Teapot works

```text
Client app → HTTP proxy on 127.0.0.1:1080 → iroh → approved exit → destination
                  │                            │
                  └──── device auth / peers ────┴── control plane
```

The Rust agent runs the local HTTP proxy and can also serve as an exit. The Android app currently serves as an exit only. Each device has an iroh endpoint identity backed by an Ed25519 secret key; control authenticates that identity using a signed challenge. New devices start **pending** and must be approved by an administrator. Offering an exit and enabling it in the dashboard are separate decisions.

Approved devices learn about peers and exit permissions from [teapot-control](https://github.com/ManifoldSystems/teapot-control), a Cloudflare Workers control plane. Presence sockets track online devices. The data path is **peer-to-peer over iroh** (direct if possible, otherwise via an iroh relay): proxy bytes do not go through teapot-control. An exit node enforces the allowlist it receives from control. By default it blocks access to its own loopback and LAN; `--allow-lan` deliberately changes this behavior.

The agent caches the last exit allowlist so exits can keep working if control is temporarily unavailable. Revocation takes effect when control can notify connected devices; don't treat offline cached permissions as instantaneous revocation during an outage.

Control and agents provide diagnostic mesh logs; logs may include destinations or other sensitive operational data. Control retains bounded history, not a lossless audit log. Avoid publishing real logs or keys when reporting bugs.

For exact message shapes, auth rules and versioned behavior, read the [protocol specification](https://github.com/ManifoldSystems/teapot/blob/main/docs/protocol.md). This page is an overview, not a replacement for that specification.

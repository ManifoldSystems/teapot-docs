# What is Teapot?

Teapot is a personal mesh built on [iroh](https://iroh.computer). Its first feature is an **exit node**: make an HTTP request on one device and let that request leave the internet through another device's connection.

```text
app on A → local HTTP proxy → iroh connection → exit node on B → internet
                                     ↑
                        control plane approves devices
```

For example, your laptop can use an approved Android phone as an exit so the destination sees the phone's mobile IP. The agent provides a local HTTP proxy at `127.0.0.1:1080`; a Python client can select an exit for individual requests.

The control plane handles device approval, exit permissions, presence, and a dashboard. It **does not carry proxy traffic**. Peers use a direct iroh path when possible, or an iroh relay when needed. HTTPS to your destination remains end-to-end; an exit still knows the destination host and handles the connection to it.

## What it isn't

- Not an anonymity network: the exit is your device, and the destination sees its public IP.
- Not a whole-device VPN: the local HTTP proxy covers clients configured to use it. macOS has an optional `--system-proxy` for HTTP/HTTPS apps, but it hasn't been tried on a real Mac; Android does not route all its apps through Teapot.
- Not a promise of a different public IP: devices sharing the same uplink may share the same address.

Next: [connect two devices](quickstart.md) or [see the architecture](architecture.md).

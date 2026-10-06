# KISS — Website

Marketing site for **KISS**, the cross-platform proxy client — one binary for
macOS, Linux, Windows, iOS and Android.

A single-page static site, deployed to GitHub Pages at
<https://fixnet-ai.github.io/kiss-website/>.

## Structure

| File          | Purpose                                  |
| ------------- | ---------------------------------------- |
| `index.html`  | Single-page site                         |
| `styles.css`  | Design tokens, layout, light/dark themes |
| `script.js`   | Theme toggle + mobile navigation         |
| `logo.svg`    | Transparent amber "KISS" wordmark        |
| `icon.svg`    | Full app icon (favicon / social)         |
| `icon.png`    | Raster app icon                          |

## Development

```sh
python3 -m http.server 8000
# open http://127.0.0.1:8000
```

Deployment is plain static files on the `main` branch (GitHub Pages, root path).

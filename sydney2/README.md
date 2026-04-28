Sydney 2 xatspace

Structure:

- `index.html` hosts the page and embeds the scene asset.
- `assets/cinnamoroll-scene.svg` is the generated SVG used by the browser.
- `assets/svg/defs.svg` contains gradients, masks, filters, and reusable SVG definitions.
- `assets/svg/background.svg` contains the sky, moon, stars, planets, comets, and Sydney wordmark.
- `assets/svg/clouds-back.svg` contains the rear and mid cloud layers.
- `assets/svg/cinnamoroll.svg` contains the Cinnamoroll character.
- `assets/svg/clouds-front.svg` contains the foreground cloud cover.
- `assets/svg/sparkles.svg` contains the ear sparkle pass.
- `css/style.css` contains page/layout styles.
- `css/scene.css` contains SVG scene styles and animations.
- `js/scene.js` contains the scene runtime behavior.
- `js/build-scene.js` rebuilds `assets/cinnamoroll-scene.svg` from the SVG partials.

After editing any file in `assets/svg/`, run this from `sydney2/`:

```bash
node js/build-scene.js
```

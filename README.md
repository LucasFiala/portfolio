# Lucas Fiala – Portfolio

Static site (HTML, CSS, JS). No build step.

```
index.html              Home
about.html              About
cases/claro.html        Case studies
cases/unicef.html
cases/gatefy.html
pt/                     Portuguese version (same pages, same names)
assets/css/style.css    All styles (colours and fonts are tokens at the top)
assets/js/main.js       Footer year + click-to-enlarge images
favicon.ico, icon.svg, apple-touch-icon.png   Site icon
assets/resume-lfiala.pdf  English résumé (Resume button)
assets/cv-lfiala.pdf      Portuguese résumé (Currículo button on /pt/)
assets/img/home/        Case covers
assets/img/<case>/      Case images, numbered in page order
assets/img/about/       photo-1.webp (portrait), photo-2.webp
```

## Publish on GitHub Pages
1. Create a public repository and upload everything in this folder.
2. Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

## Replace an image
Save the new file with the same name in the same folder (`.webp`), then upload it.

## Two languages
English lives at the root and Portuguese in `pt/`. Each page has an EN / PT switch that opens the same page in the other language.
When you change a text, change it in both files: `cases/claro.html` and `pt/cases/claro.html`, for example.
Images, CSS and JS are shared, so layout changes apply to both languages at once.

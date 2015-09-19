# PSEUDOHOVER
A tiny script that makes you able to highlight on hover all links with the same `href` attribute.

Works in all modern browsers (IE10+ due to usage of classList API).

## Usage
Just put script into your page:

```html
<script src="pseudohover.min.js"></script>
```

When link will be hovered, script will add class `.js-hovered` to all links with the same `href` attribute. So in your CSS it must be something like that:

```css
a {
  text-decoration: underline;
  color: blue;
}

/* add selector for .js-hovered class */
a:hover, a.js-hovered {
  text-decoration: none;
}
```
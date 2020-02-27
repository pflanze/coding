### CSS Selectors

id, class, and descendant selectors
If so, you're missing out on an enormous level of flexibility. While many of the selectors are part of the CSS3 spec, and are, consequently, only available in modern browsers,
A simple selector is either a type selector, universal selector, attribute selector, class selector, ID selector, or pseudo-class.
### Type selectors

A type selector matches the name of a document language element type. A type selector matches every instance of the element type in the document tree.

```html
The following rule matches all H1 elements in the document tree: h1 {
font-family: sans-serif }
```

1. [ * ]Universal selector

```css
* {
  margin: 0;
  padding: 0;
}
```

The star symbol will target every single element on the page. Many developers will use this trick to zero out the margins and padding. While this is certainly fine for quick tests, I'd advise you to never use this in production code. It adds too much weight on the browser, and is unnecessary.

The \* can also be used with child selectors.
 the universal selector * does not affect pseudo-elements (except indirectly via inheritance, as pseudo-elements are typically generated as children of actual elements).

The universal selector, like other named element selectors such as p and div, is a simple selector:

A simple selector is either a type selector, universal selector, attribute selector, class selector, ID selector, or pseudo-class.

2.

```css
#container {
  width: 960px;
  margin: auto;
}
```

Prefixing the hash symbol to a selector allows us to target by id. This is easily the most common usage, however be cautious when using id selectors.

Ask yourself: do I absolutely need to apply an id to this element in order to target it?

id selectors are rigid and don't allow for reuse. If possible, first try to use a tag name, one of the new HTML5 elements, or even a pseudo-class.

3.

```css
.error {
  color: red;
}
```

This is a class selector. The difference between ids and classes is that, with the latter, you can target multiple elements. Use classes when you want your styling to apply to a group of elements. Alternatively, use ids to find a needle-in-a-haystack, and style only that specific element.

4.

```css
li a {
  text-decoration: none;
}
```

The descendant selector. When you need to be more specific with your selectors, you use these. For example, what if, rather than targeting all anchor tags, you only need to target the anchors which are within an unordered list? This is specifically when you'd use a descendant selector.

5.

```css
a {
  color: red;
}
ul {
  margin-left: 0;
}
```

to target all elements on a page, according to their type, rather than an id or class name? Keep it simple, use a type selector. If you need to target all unordered lists, use ul {}.

6. X:visited and X:link

```css
a:link {
  color: red;
}
a:visted {
  color: purple;
}
```

use the :link pseudo-class to target all anchors tags which have yet to be clicked on.

Alternatively, also have the :visited pseudo class, which, as expected, allows to apply specific styling to only the anchor tags on the page which have been clicked on, or visited.

7.  X + Y

```css
ul + p {
  color: red;
}
```

This is referred to as an adjacent selector. It will select only the element that is immediately preceded by the former element. In this case, only the first paragraph after each ul will have red text.

8. X > Y

```css
ul ~ p {
  color: red;
}
```

This sibling combinator is similar to X + Y, however, it's less strict. While an adjacent selector (ul + p) will only select the first element that is immediately preceded by the former selector, this one is more generalized. It will select, referring to our example above, any p elements, as long as they follow a ul.

9.  X ~ Y

```css
ul ~ p {
  color: red;
}
```

This sibling combinator is similar to X + Y, however, it's less strict. While an adjacent selector (ul + p) will only select the first element that is immediately preceded by the former selector, this one is more generalized. It will select, referring to our example above, any p elements, as long as they follow a ul.

X[title]

```css
a[title] {
  color: green;
}
```

Referred to as an attributes selector, in our example above, this will only select the anchor tags that have a title attribute. Anchor tags which do not will not receive this particular styling. But, what if I need to be more specific?

11. X[href="foo"]

```css
a[href="https://net.tutsplus.com"] {
  color: #1f6053; /* nettuts green */
}
```

The snippet above will style all anchor tags which link to https://net.tutsplus.com; they'll receive our branded green color. All other anchor tags will remain unaffected.

Note that the value is wrapped in quotes. Remember to also do this when using a JavaScript CSS selector engine. When possible, always use CSS3 selectors over unofficial methods.

This works well, though, it's a bit rigid. What if the link does indeed direct to Nettuts+, but, maybe, the path is nettuts.com rather than the full url? In those cases we can use a bit of the regular expressions syntax.

12. X[href*="nettuts"]

```css
a[href*="tuts"] {
  color: #1f6053; /* nettuts green */
}
```

that's what need. The star designates that the proceeding value must appear somewhere in the attribute's value. That way, this covers nettuts.com, net.tutsplus.com, and even tutsplus.com.

Keep in mind that this is a broad statement. What if the anchor tag linked to some non-Envato site with the string tuts in the url? When you need to be more specific, use ^ and \$, to reference the beginning and end of a string, respectively.

13. X[href^="http"]

```css
a[href^="http"] {
  background: url(path/to/external/icon.png) no-repeat;
  padding-left: 10px;
}
```

to display a little icon next to the links which are external? I'm sure you've seen these before; they're nice reminders that the link will direct you to an entirely different website.

This is a cinch with the carat symbol. It's most commonly used in regular expressions to designate the beginning of a string. If we want to target all anchor tags that have a href which begins with http, we could use a selector similar to the snippet shown above.

Notice that it not searching for https://; that's unnecessary, and doesn't account for the urls that begin with https://.

what if wanted to instead style all anchors which link to, say, a photo? In those cases, let's search for the end of the string.

14. X[href$=".jpg"]

```css
a[href$=".jpg"] {
  color: red;
}
```

Again, we use a regular expressions symbol, \$, to refer to the end of a string. In this case, we're searching for all anchors which link to an image -- or at least a url that ends with .jpg. Keep in mind that this certainly won't work for gifs and pngs.

### COMBINATORS - Selectors

Adding a class or ID isn’t the only way to style some parts of your document differently. Our more complex selectors give you ways to select elements based on where they are in the document. The first set of selectors we can look at are the Combinators. There are four different Combinators and they work by combining other selectors.

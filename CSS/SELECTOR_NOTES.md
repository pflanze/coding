A simple selector, and by extension any complex selector, targets only actual elements.

Although pseudo-elements (which are not the same thing as pseudo-classes mentioned above) can appear in selector notation alongside simple selectors, pseudo-elements are completely separate from simple selectors as they represent abstractions of the DOM that are separate from actual elements, and therefore both represent different things. You cannot match a pseudo-element using a simple selector, nor can you apply styles to an actual element in a CSS rule with a pseudo-element in its selector.

So, in order to match :before and :after pseudo-elements of any element, yes, one will need to include _:before, _:after in the selector. Having just \* { box-sizing: border-box; } will not affect them since box-sizing is not normally inherited, and as a result, they will retain the default box-sizing: content-box.

One possible reason why you might never have had any issues with pseudo-elements is that they're displayed inline by default, as box-sizing has no effect on inline elements whatsoever.

Some notes:

As with any other chain of simple selectors, if _ is not the only component then you can leave it out, which means _, :before, :after is equivalent to _, _:before, _:after. That being said, the _ is usually included for the sake of clarity — most authors are used to leaving the \* out when writing ID and class selectors, but not pseudo-classes and pseudo-elements, so the notation may seem strange and even wrong to them (when it is in fact perfectly valid).

The current Selectors specification that I link to above represents pseudo-elements with double colons. This is a new notation introduced in the current spec to distinguish pseudo-elements from pseudo-classes, but most box-sizing resets use the single colon notation to accommodate IE8, which supports box-sizing but not the double colon notation.

Although _:before, _:after applies styles to the respective pseudo-elements of any element, which includes html, head and body, the pseudo-elements will not actually be generated until you apply the content property. You do not have to worry about any performance issues as there are none.

<b> Purpose of _:before, _:after rule without content property </b>

```css
*,
*:before,
*:after {
  -moz-box-sizing: border-box;
}
```

That applies border-box sizing to all elements as well as any :before and :after pseudo-elements that they may generate. The _:before, _:after portion means the respective pseudo-elements of any element.

Once you create specific :before/:after rules later in your stylesheet, this declaration will apply automatically to all of those pseudo-elements, so you don't have to repeat it in every single one of your pseudo-element rules. In other words, the cascade works exactly the same way for pseudo-elements as it does with actual elements: when you have separate rules matching the same thing, as long as they match, they will all be applied.

Note that in order for an element to actually generate a :before or :after, its content must be something other than none. By itself, the CSS that you have given will not cause every element to automatically generate both pseudo-elements; it just ensures the browser will use border-box sizing if it does need to render any of them. See the spec for how generated content works.

For example, the following CSS:

```css
*,
*:before,
*:after {
  box-sizing: border-box;
}

div:after {
  content: "hello";
}
```

### POSITION

The CSS position property defines, as the name says, how the element is positioned on the web page.

If you are interested in reading about the font properties, articles about the relative font size and CSS columns might be of interest.

So, there are several types of positioning: static, relative, absolute, fixed, sticky, initial, and inherit. First of all, let's explain what all of these types mean.

Static - this is the default value, all elements are in order as they appear in the document.
Relative - the element is positioned relative to its normal position.
Absolute - the element is positioned absolutely to its first positioned parent.
Fixed - the element is positioned related to the browser window.
Sticky - the element is positioned based on the user's scroll position.
Now that we have explained the basics, we will talk more about the two most commonly used position values - relative and absolute.

### What Is Relative Positioning?

When you set the position relative to an element, without adding any other positioning attributes (top, bottom, right, left) nothing will happen. When you add an additional position, such as left: 20px the element will move 20px to the right from its normal position. Here, you can see that this element is relative to itself. When the element moves, no other element on the layout will be affected.

There is a thing you should keep in mind while setting position - relative to an element limits the scope of absolutely positioned child elements. This means that any element that is the child of this element can be absolutely positioned within this block.

After this brief explanation, we need to back it up, by showing an example.

In this example, you will see how the relatively positioned element moves when its attributes are changed. The first element moves to the left and top from its normal position, while the second element stays in the same place because none of the additional positioning attributes were changed.

### HTML

```html
<div id="first_element">First element</div>
<div id="second_element">Second element</div>
```

### CSS

```css
#first_element {
  position: relative;
  left: 30px;
  top: 70px;
  width: 500px;
  background-color: #fafafa;
  border: solid 3px #ff7347;
  font-size: 24px;
  text-align: center;
}
#second_element {
  position: relative;
  width: 500px;
  background-color: #fafafa;
  border: solid 3px #ff7347;
  font-size: 24px;
  text-align: center;
}
```

### What Is Absolute Positioning?

This type of positioning allows you to place your element precisely where you want it.

The positioning is done relative to the first relatively (or absolutely) positioned parent element. In the case when there is no positioned parent element, it will be positioned related directly to the HTML element (the page itself).

An important thing to keep in mind while using absolute positioning is to make sure it is not overused, otherwise, it can lead to a maintenance nightmare.

In the example, the parent element has the position set to relative. Now, when you set the position of the child element to absolute, any additional positioning will be done relative to the parent element. The child element moves relative to the top of the parent element by 100px and right of the parent element by 40px.

### HTML

```html
<div id="”parent”">
  <div id="”child”"></div>
</div>
```

```css
#parent {
  position: relative;
  width: 500px;
  height: 400px;
  background-color: #fafafa;
  border: solid 3px #9e70ba;
  font-size: 24px;
  text-align: center;
}
#child {
  position: absolute;
  right: 40px;
  top: 100px;
  width: 200px;
  height: 200px;
  background-color: #fafafa;
  border: solid 3px #78e382;
  font-size: 24px;
  text-align: center;
}
```

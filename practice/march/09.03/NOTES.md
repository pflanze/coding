### em Unit

The em unit is a scalable font size unit. It is related to the font size of the parent container. One em (1em) is equal to the current font size. So for example, if the parent element has the font size of 16px than 1em is equal to 16px, 2em is equal to 32px, and so on.

Making your design responsive becomes much easier if you use em units instead of px.

But, there is one thing that needs to be looked after. When using ems you should be careful with nesting.

For example, let's say you created a section and set its font size to 2ems. Now, you want to add a paragraph within the section that has a font size of 1em. The paragraph's font size is related to the font size of the section. If the nesting continues, or if it is used on multiple segments of the project, you can quickly lose sight of what is relative to what, and get completely lost.

Now, it is time to introduce the rem unit.

### REM Unit

The rem unit is another scalable font size, but unlike the em unit, it is related to the root element (HTML) instead of the parent element. That's where it got its name (root em = rem).

This means that, if you use the rem unit on elements, you can quickly change the font size of the entire project, just by adjusting the root font size. This way is fast, easy, and avoids any nesting complications you might get while using the em unit.

### So, Which Unit Should You Use?

The best way to answer this question is by using an example.

First, we will use the px unit.

```css
html {
  font-size: 100%;
} //usually 16px
div {
  font-size: 16px;
}
div > p {
  font-size: 14px;
}
```

Here, you can see that the font size is set individually for each element, and they have no relation between each other.

Next, we'll use the em unit for the same code segment.

```css
html {
  font-size: 100%;
}
div {
  font-size: 0.875em;
} // 14px
div > p {
  font-size: 2em;
} // 28px
```

In this example, the difference between the px and em units is clear. And, the relativeness of the em unit is clear. Just by changing the font size of the container div, we can see that the paragraph font size updated accordingly.

Finally, using the rem unit.

```css
html {
  font-size: 100%;
}
div {
  font-size: 1rem;
} // 16px
div > p {
  font-size: 1.5rem;
} // 24px
```

When using the rem unit, it is clear that all font sizes are related to the root font size. Both the div and the paragraph font sizes are related to the root, despite the div being the parent of the paragraph.

### Conclusion

There are no right or wrong units. It all depends on your skill level, project type, and size and personal preference.

If you would like to have complete control over the font size, the pixel unit is for you. If you would like a little bit more flexibility when manipulating the web page than the em or rem units are the best choices. Either way, the best result will be achieved when the units are fully understood.

The objective of this technique is to specify text font size in em units so that user agents can scale content effectively. Since the em is a property of the font, it scales as the font changes size. If a font-size is specified for the body element, all other elements inherit that value, unless overridden by a more specific selector.

Examples
Example 1: Em font sizes in CSS
This example defines the font size for strong element so that its text will always be larger than the surrounding text, in whatever context it is used. Assuming that headings and paragraphs use different font sizes, the strong words in this example will each be larger than their surrounding text.

```css
strong {
  font-size: 1.6em;
}
```

...

```html
<h1>Letting the <strong>user</strong> control text size</h1>
<p>
  Since only the user can know what size text works for him, it is
  <strong>very</strong> important to let him configure the text size.
</p>
```

…### Font-Size In REM
The font-size rem values were invented in order to overcome the problem of em with nested element’s.
The font-size rem values are relative to the root html element, not the parent element, rest everything is same as em.
Below is the different between rem and em if there is nested elements.
Difference between Nested Elements With EM and REM

REM for base elements, and EM for relative/nested elements. I'm not a fan of "pixel perfect" designs and lean towards flexibility in layout.

And EMs allow for using percentage based calculations down the line.

The main problem with em units is that they are relative to the font size of their own element. As such they can cascade and cause unexpected results.

### Use `rem` for Global Sizing; Use `em` for Local Sizing

CSS Font-Size: em vs. px vs. pt vs. percent

One of the most confusing aspects of CSS styling is the application of the font-size attribute for text scaling. In CSS, you’re given four different units by which you can measure the size of text as it’s displayed in the web browser. Which of these four units is best suited for the web? It’s a question that’s spawned a diverse variety of debate and criticism. Finding a definitive answer can be difficult, most likely because the question, itself, is so difficult to answer.

Meet the Units
“Ems” (em): The “em” is a scalable unit that is used in web document media. An em is equal to the current font-size, for instance, if the font-size of the document is 12pt, 1em is equal to 12pt. Ems are scalable in nature, so 2em would equal 24pt, .5em would equal 6pt, etc. Ems are becoming increasingly popular in web documents due to scalability and their mobile-device-friendly nature.
Pixels (px): Pixels are fixed-size units that are used in screen media (i.e. to be read on the computer screen). One pixel is equal to one dot on the computer screen (the smallest division of your screen’s resolution). Many web designers use pixel units in web documents in order to produce a pixel-perfect representation of their site as it is rendered in the browser. One problem with the pixel unit is that it does not scale upward for visually-impaired readers or downward to fit mobile devices.
Points (pt): Points are traditionally used in print media (anything that is to be printed on paper, etc.). One point is equal to 1/72 of an inch. Points are much like pixels, in that they are fixed-size units and cannot scale in size.
Percent (%): The percent unit is much like the “em” unit, save for a few fundamental differences. First and foremost, the current font-size is equal to 100% (i.e. 12pt = 100%). While using the percent unit, the text remains fully scalable for mobile devices and for accessibility.

### What’s the Difference?

It’s easy to understand the difference between font-size units when see them in action. Generally, 1em = 12pt = 16px = 100%. When using these font-sizes, what happens when you increase the base font size (using the body CSS selector) from 100% to 120%.

Font-sizes as they increase from 100% to 120%.

As you can see, both the em and percent units get larger as the base font-size increases, but pixels and points do not. It can be easy to set an absolute size for your text, but it’s much easier on your visitors to use scalable text that can display on any device or any machine. For this reason, the em and percent units are preferred for web document text.

### Em vs. Percent

We’ve decided that point and pixel units are not necessarily best suited for web documents, which leaves us with the em and percent units. In theory, both the em and the percent units are identical, but in application, they actually have a few minor differences that are important to consider.

In the example above, we used the percent unit as our base font-size (on the body tag). If you change your base font-size from percent to ems (i.e. body { font-size: 1em; }), you probably won’t notice a difference. Let’s see what happens when “1em” is our body font-size, and when the client alters the “Text Size” setting of their browser (this is available in some browsers, such as Internet Explorer).

Font-size as the client changes the text size in their browser.

When the client’s browser text size is set to “medium,” there is no difference between ems and percent. When the setting is altered, however, the difference is quite large. On the “Smallest” setting, ems are much smaller than percent, and when on the “Largest” setting, it’s quite the opposite, with ems displaying much larger than percent. While some could argue that the em units are scaling as they are truly intended, in practical application, the em text scales too abruptly, with the smallest text becoming hardly legible on some client machines.

The Verdict
In theory, the em unit is the new and upcoming standard for font sizes on the web, but in practice, the percent unit seems to provide a more consistent and accessible display for users. When client settings have changed, percent text scales at a reasonable rate, allowing designers to preserve readability, accessibility, and visual design.

### The winner: percent (%).

when I create a new design, I will use percent on the body element (body { font-size: 62.5%; }), and then use the em unit to size it from there. As long as the body is set using the percent unit, you may choose to use either percent or ems on any other CSS rules and selectors and still retain the benefits of using percent as your base font size. Over the past couple of years, this has really become the standard in design.

Pixels are now considered acceptable font size units (users can use the browser’s “zoom” feature to read smaller text), although they are starting to cause some issues as a result of mobile devices with very high density screens (some Android and iPhone devices have upwards of 200 to 300 pixels per inch, making your 11- and 12-pixel fonts very difficult to see!). As a result, I will continue to use percent as my base font size in web documents.

em and rem both are relative and based not
the disingtion comes of how we size the elements

rem is a multiplier , the idea behind it is to allow the font-size to be adjustable by their user

by default 1rem represents 16px
but really whta it represents is the default font-size that is specified by
the use in the browser.  
Resaurse:

https://www.sitepoint.com/understanding-and-using-rem-units-in-css/

https://medium.com/nyc-design/depth-understanding-of-font-size-px-vs-em-vs-rem-3bee9cbe521a

https://developer.mozilla.org/en-US/docs/Web/CSS/font-family

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts

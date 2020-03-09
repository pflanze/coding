### CSS TRANSITIONS
The simplest (and most straightforward) way to animate your components is through CSS Transitions. In this article, you’ll learn how CSS Transitions work, and how to make animations with it.

A transition occurs when a CSS property changes from one value to another value over a period of time.

You can create CSS Transitions with the transition property:

.selector {
  transition: property duration transition-timing-function delay;
}
The transition property is a shorthand of four CSS properties, transition-property, transition-duration, transition-timing-function, transition-delay.
```css
.selector {
  transition-property: property;
  transition-duration: duration;
  transition-timing-function: timing-function;
  transition-delay: delay

  /* The transition property is the shorthand for the above four properties */
  transition: property duration timing-function delay;
}
```
transition-property refers to the CSS property you wish to transition. It is required in the transition shorthand.

transition-duration refers to the duration of the transition. How long do you want the transition to last? This value is written in seconds with the s suffix (like 3s). It is also required in the transition shorthand.

transition-timing-function refers to how to transition occurs. You’ll learn more about this later.

transition-delay refers to how long you want to wait before starting the duration. This value is written in seconds with the s suffix (like 3s). transition-delay is optional in the transition shorthand.

### Triggering transitions
You can trigger CSS transitions directly with pseudo classes like :hover (activates when mouse goes over an element), :focus (activates when a user tabs onto an element, or when a user clicks into an input element), or :active (activates when user clicks on the element).
```css
/* creating transitions directly in CSS */
.button {
  background-color: #33ae74;
  transition: background-color 0.5s ease-out;
}

.button:hover {
  background-color: #1ce;
}

```

The transition property has three values: the properties to transition (all of them) the speed of the transition (in 0.3 seconds) and a third value which lets us change how the acceleration and deceleration is calculated.

Fade in
Having things fade in is a fairly common request from clients. It’s a great way to emphasize functionality or draw attention to a call to action.

Fade in effects are coded in two steps: first, you set the initial state; next, you set the change, for example on hover:
```css
.fade
{
        opacity:0.5;
}
.fade:hover
{
        opacity:1;
}
```


2. Change color
Animating a change of color used to be unbelievably complex, with all kinds of math involved in calculating separate RGB values and then recombining them. Now, we just set the div’s class to “color” and specify the color we want in our CSS:
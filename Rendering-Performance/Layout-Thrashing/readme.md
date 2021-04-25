# Layout Thrashing
The browser wait until the end of current operation (or frame) to perform the reflow. But if we ask for a geometric value back from the DOM before the current operation (or frame) is complete, the browser has to perform layout early, this is known as ‘forced synchonous layout’.

Solution : Separate reading from writing.

solution 1 (In a loop)
```js
element1.classList.toggle('class'); // change
element2.classList.toggle('class'); // change

elementWidth1 = setWidth // calculate
elementWidth2 = setWidth // calculate
```

<br />

solution 2 (In a loop)
```js
const top = element.offsetTop;
requestAnimationFrame(() => {
    element.style.transform =  top + 10 + 'px';
})
```

reading first and later when all those `requestAnimationFrame` come back to complete all the writing will be batched.
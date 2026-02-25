1.	What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer: getElementById("id") selects and returns a single element by its unique ID.
getElementsByClassName("className") selects all elements of a specific class and returns live HTMLCollection, not an array. It updates autometically if DOM changes.
querySelector(selector) returns the first element that matches a given CSS selector.
querySelectorAll(selector) returns a static NodeList of all matching CSS selector. It supports forEach() which is not directly supported by getElementsByClassName("className").
The main difference between getElementsByClassName("className") and querySelectorAll(selector) is getElementsByClassName("className") returns live HTMLCollection and does not support forEach() while querySelectorAll(selector) returns static NodeList and supports forEach(). Also, querySelector(selector) selects only first matching element.

2.	How do you create and insert a new element into the DOM?
Answer: We first use document.createElement() to create the element. Then we can add content or attributes to it using properties like innerText, innerHTML, or className. 
After that, we insert it into the webpage using methods like appendChild().
Example: let newDiv = document.createElement("div");
newDiv.innerText = "This is a new div";
document.body.appendChild(newDiv);

3.	What is Event Bubbling? And how does it work?
Answer: When an event occurs on a child element and it propagates up to its parent elements, it is called Event Bubbling.
It works when an event starts on the target element and then moves upward to its parent, grandparent, and so on, until it reaches the root (document) in the DOM.
For example, if we click a button inside a div, the click event first runs on the button, then it “bubbles up” to the parent div and continues up to the body and document. This happens automatically unless we stop it using event.stopPropagation().


4.	What is Event Delegation in JavaScript? Why is it useful?
Answer: Event Delegation is a technique in JavaScript where we add a single event listener to a parent element instead of adding separate event listeners to multiple child elements.  
It works using event bubbling, where events on children move up to the parent. The parent can detect which child triggered the event using event.target.
It is useful because it improves performance, reduces number of event listeners, keeps code cleaner, and works for dynamically added elements.

5.	What is the difference between preventDefault() and stopPropagation() methods?
Answer: preventDefault() stops the browser’s default action for an event. For example, clicking on a link normally opens a new page but by using preventDefault(), we can stop this default behaviour and handle in our own ways using JavaScript.
stopPropagation() stops the event from bubbling up to parent elements in the DOM.
Both methods are very useful if we want precise control over how events behave in our web page.



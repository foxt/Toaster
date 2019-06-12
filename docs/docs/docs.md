# Toaster Documentation

## 'Toast' class
This class represents a toast.

### Properties

|Property|Type|Default|Description |
|---|---|---|---|
|title|string|""|The title of the toast|
|description|string|""|The main information of the toast|
|style|string|"fallback"|The style. See the styles documentation below|
|timeout|int|5000|The time it takes for the toast to disappear, in milliseconds. 0, -1 or any < 1 value will make the toast never disappear|
|closable|bool|true|Decides if the toast will show a close button on the notification|
|dom|HTMLDivElement|undefined|The DOM element the toast is contained in|

### Functions

#### toast.show(options)

This creates the DOM element and then shows the toast, The show also allows an options object and will be applied like the constructor. This isn't recommended.

#### constructor(options)

The constructor takes an object, and applies the configuration to the toast object. For example, the following code will create a toast object with the title 'Hi'

```js
new Toast({
  title: "Hello, world!",
})
```

## _toaster

This object contains the valid styles and the breadbag.

### _toaster.styles

This is an object of functions, that take one argument that is simply a toast object, and return a HTMLDivElement. By default, toaster comes with no styles, except the basic 'fallback' demo style. If you would like to create your own style, load a JS file after Toaster with the following code, which is the fallback style. Modify however you see fit. **Styles should not have any positioning code, this should be applied to the breadbag**

```js
// Create style function for Toaster.
_toaster.styles["my_style"] = function(toast) {
	// Create the DOM element
	var dom = document.createElement("div");
	
	// Give it a class
	dom.className = "toaster fallback-toast"
	
	// Give it a black background and white text colour
	dom.style = "background: #000;color: #fff"
	
	// Set the innerHTML of the toast
	dom.innerHTML = `<h1>${toast.title}</h1>
	${toast.description}`
	
	// Make the toast closable
	if (toast.closable) {
		// Add close button
	  	dom.innerHTML += "<a id='toastClose'>Close</a>"
	  	
	  	// Make it do something
	   	dom.querySelector("a#toastClose").onclick = function() {
	   		dom.remove()
	   	}
 	}
 	
 	// Return the DOM element back to Toaster
	return dom
}
```

### _toaster.breadbag

The breadbag is the container of all the toasts. It is a HTMLDivElement, and contains the placement of the toasts. To move it, run the following code after loading Toaster.

```js
// Make sure the breadbag exists before trying to move it
_toaster.createBreadBag()
// Move it to top left
_toaster.breadbag.style = "position: fixed;top: 0;right: 0;"
```
# Palantir Javascript Tutorial

Welcome to the Palantir javascript tutorial.  You're probably here because you either haven't touched Javascript for a while, or you haven't ever touched it to begin with, and you need to work with front-end code in the near future.  You might ask, "Hey, don't we use Typescript at Palantir?  Why am I learning any Javascript at all?"  Good question.

First off, all Javascript is valid Typescript, in the same way that all Java is valid Groovy.  A significant chunk of the code you'll be writing for the browser will just be vanilla Javascript with types tacked on via Typescript, because types are great.  There are a lot of features of the base Javascript language you should know even when writing Typescript.  Some because they are pretty useful, and some becaues they are really weird if you're more familiar with other languages, and Typescript doesn't remove that weirdness.

Secondly, when you're debugging code in the browser, which you'll be doing, you're going to be looking at Javascript.  And not just any old Javascript--it's going to be some pretty old-school Javascript, because not all browsers are up to date with supporting the latest Javascript features (I'm looking at you, IE 11).  We have some sweet build tools that make this a bit better, but the fact remains that even if you're writing very nice Java-like Typescript classes, you're going to be looking at old functional-style Javascript "classes" in your browser's console (more on those later).

# "Lecture" material

There's actually some decent content on the web introducing Javascript, so we won't be reinventing the wheel here.  You're probably familiar with at least one other programming language (no worries if not, it might actually make this part easier for you!), and if you are, there are some features of Javascript that will just feel downright weird.  Below in this section is a link to a pretty nice intro to the basic language features of Javascript, but before you click on it, there are a few things to pay special attention to.  We'll do this in a few sections broken up by exercises (exercises described in a below section of this README).

So here's the link to the tutorial, but do read each section of the README here before diving into that section of the tutorial: https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

## Basic JS language features

To start with, let's cover the basic language features of Javascript.  They look a lot like the basic features of most languages, but there are a couple weird quirks.

A general oddity of Javascript relative to other languages is the way scope works, and it's well worth paying attention to the intro's information about it.  Beyond that, there are three major categories of weirdness in the basic language features that you should understand: types, arrays, and booleans.

### Types

First, types are a bit odd (and you'll get this sense as you're reading).  Types are dynamic in raw Javascript (which is fixed, at least during development, in Typescript), and there are a bunch of different ways to test for what the type of a variable is.  The typeof operator returns a String describing the base type of the object, but with some very strange behavior.  In particular, it's very difficult to tell whether a variable is an array or an object using this method.  Which sounds super weird if you're coming from, say, Java.

Here's a more complete reference to what typeof actually does: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

And here are some examples of the weirdness.

```javascript
var array = [];
typeof array === 'object'; // arrays are actually just objects under the hood
```

```javascript
var array = [];
Array.isArray(array); // This does the right thing and makes sure arary is actually an array and not just a vanilla object
```
### Arrays

Not only are arrays weird in the way they interact with typechecking, they're also just weird in their own right.  If you use them pretty much exclusively like normal arrays in other languages, you'll likely avoid most of this weirdness (and that's how you should use them for the most part), but it's worth keeping the weirdness in mind because it can creep in and confuse you very easily.

The first big bit of weirdness is that arrays are just objects under the hood, as mentioned above.  That means that the below code actually works:

```javascript
var array = [];
array.foo = 'bar';
array['foo'] === 'bar';

array[0] = 'baz';
array['0'] === 'baz'; // array values are actually keyed by strings, just like object properties
```

Additionally, because arrays are just objects, standard for-in loops won't work the way you might expect.

```javascript
var object = {"foo": "bar", "baz": "qux"};
for (var key in object) {
  console.log(key); // logs "foo" and then "baz"
}

var array = [4, 5, 6];
for (var key in array) {
  console.log(key); // logs "0", "1", and "2", NOT 4, 5, and 6
}
```

Despite their weirdness, arrays do have some nice features, mostly documented in the linked intro.  One thing that isn't documented there is the "splat" operator, ... (just an ellipsis), which is useful in created both new arrays an objects.

```javascript
var array = [2];
var newArray = [1, ...array, 3]; // newArray is [1, 2, 3]

var object = {"foo": "bar", "baz": "qux"};
var newObject= {...object, "foo": "bar2", "baz2": "qux2"};// newObject has foo now set to "bar2" and a new property "baz2" set to "qux2", but also includes "baz" set to "qux"
var otherObject = {"foo": "bar2", "baz2": "qux2", ...object};// this time, since ...object appears at the end of the expression, "foo" in otherObject will be set to "bar" instead of "bar2"
```

### Booleans and Truthiness

One thing glossed over in the linked intro is how variables in Javascript get coerced to boolean values.  Every variable in Javascript is either truthy or falsy, referring to whether it will coerce to true or false.  undefined, empty strings, 0, null, and false are all falsy.  However, arrays and objects, whether empty or not, are truthy.  For a more complete breakdown, check out https://developer.mozilla.org/en-US/docs/Glossary/Truthy.  At some point, you may write or encounter some code that looks like

```javascript
functionThatTakesABoolean(!!someVariable);
```

The first ! forces Javascript to evaluate the truthiness of someVariable and return its opposite, and then the second returns it back to its original truthiness value.

With these oddities in mind, read through the linked intro and then take on the first set of exercises in <PLACEHOLDER> before moving on to the next section.

## Javascript Functions and Classes

Next up, we'll cover functions and classes in Javascript.  This is where Javascript starts to differ quite a bit more from languages like Java, so it's worth paying careful attention to how things work, particularly if you're very familiar with other languages.

### Functions

There are quite a number of oddities of functions in Javascript to be aware of.  The first is the fact that the list of parameters is really more of a guideline than a rule.  The intro covers the arguments array pretty well for when a function is called with more parameters than are listed, but you can also call a function with fewer parameters than are listed, and those arguments will just be undefined, as below:

```javascript
var addUpToThree = function(a, b, c) {
  var added = a + b;
  if (c) { // both undefined and 0 are falsy.  Either way we can just return a + b
    return added + c;
  } else {
    return added;
  }
}
addUpToThree(1, 2) === 3;
addUpToThree(1, 2, 3) === 6;
```

Another oddity you can run into is that function overloading is impossible.  While frowned upon for the most part in other languages, the Javascript language precludes even the possibility of overloading functions, since functions are just named properties of objects (including the global object for functions you don't explicitly attach to an object), and objects can only have one property with a given name.  Note that this also means you can't have a property on an object with the same name as a function on that object (e.g. a size field and a size() method on a data structure).

A third oddity is that functions are just objects with the special property of being able to be executed, so you can set properties on them just like you would an object or an array.  This is actually pretty important for some of the language features involving classes, which we'll talk about below, but most of the time you shouldn't be messing with properties of functions.

### Classes

Classes are actually a very complicated topic in Javascript, so this will be the largest section of this tutorial.  Go ahead and read through the intro all the way through the section on "Custom Objects," which is their term for Classes.

Ok, deep breath.  The first thing to note about classes in Javascript is that the inheritance model is completely different from typical object oriented languages like Java.  In Java, if you have an Employee class that extends a Person class, when you construct an Employee, you get an object that has all the fields and methods of the Employee class, including what gets inherited from Person, attached directly to it (it's slightly more complicated, but that's basically true).  Not so in Javascript.  Javascript uses prototypal inheritance.  The intro does a pretty good job of describing it, but I'll go a bit deeper here because it's quite confusing, and it's absolutely worth understanding.

Let's take a look at a couple of the last code blocks in the intro's section on classes, reproduced below:

```javascript
function Person(first, last) {
  this.first = first;
  this.last = last;
}
Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};
Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};

s = new Person('Simon', 'Willison');
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function firstNameCaps() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"
```

The first part of this code is the declaration of a function called Person that looks like a typical constructor.  In fact, this is actually just a javascript function, and it only becomes interesting because of a language feature that allows you to say new Person(a, b), and have the function called in a special way.  I'll get to that in a second.  Before that though, the next couple of statements attach two functions to the prototype field of Person.  prototype is a field that automatically exists on Javascript functions (remember, functions are just objects, so they can have whatever they want attached to them).  prototype is special though, again because of language features and that new keyword.

So now we have a function Person and its prototype field holds two functions.  Person.prototype is just a Javascript object with two properties that happen to be functions called fullName and fullNameReveresed.  The next line, constructing a new Person, is where some magic happens, and to explore that magic a bit more, I'll expand the Person function into a different one that does exactly the same thing (in fact, often the above Person function will get transpiled into the below newPerson function for browsers that don't support the above style of object creation).

```javascript
function newPerson(first, last) {
  var newPerson = Object.create(Person.prototype);
  newPerson.first = first;
  newPerson.last = last;
  return newPerson;
}
```

newPerson is effectively an instruction-by-instruction copy of Person but with different syntax, and to use it you would now omit the new keyword in object creation.  It should be fairly obvious that the interesting changes here are the use of Object.create() and the lack of the this keyword.  Object.create() is a function that creates a new object with a prototypal link to the object passed into it.  Whenever a property lookup on newPerson fails, Javascript will then look for that property on Person.prototype, and if that fails, it always defaults to Object.prototype at the end of the chain.  So if you inspect newPerson at the end of this function call, you will see two properties on it, first and last, and you will NOT see the methods on it.  But you will see a prototypal link to Person.prototype, which does have those methods.

The rest of the code snippet from the intro is interesting as well.  Adding the new method firstNameCaps to the prototype demonstrates that we didn't just copy the current state of Person.prototype when we created the object called s.  We're actually referring to the live version of Person.prototype at all times.  So as another example, we could set Person.prototype.middleName = 'My Favorite Middle Name', and now EVERY object that has EVER been created by new Person() will have this new middle name (unless that object has overridden that property).  This can be powerful, but is also very confusing and potentially dangerous, so you should probably avoid doing such things whenever possible.

Finally, it's worth knowing about the many different ways of creating inheritance hierarchies in Javascript.  The code snippet from above is referred to as the "pseudo-classical" style, because it kind of looks like a standard constructor in other object oriented languages.  My new code snippet is referred to as the "prototypal" style, because it makes the prototypal inheritance model very clear.  There are also "functional" and "functional-shared" styles, described quite nicely here: http://www.ryanatkinson.io/javascript-instantiation-patterns/.  And finally, there is the new, ECMAScript 6 (ES 6--Also, ECMAScript and Javascript are two names for the same language), style, which looks much more like normal classes that you might be used to, and also looks a lot like Typescript classes which you'll be writing and using yourself.  Rewriting the above in that style gives:

```javascript
class Person {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  
  fullName() {
    return this.first + ' ' + this.last;
  }
  
  fullNameReversed() {
    return this.last + ', ' + this.first;
  }
}
```

You should prefer using this style (especially when you're working in typescript), but you absolutely will encounter the other styles, at the very least when you're debugging in your browser console, so it's definitely worth understanding how they work.

#### Inheritance

Inheritance is its own complicated problem within classes.  Before the ES6 style of classes, inheritance was very confusing and hard to get right, and those pitfalls and the proper ways to do inheritance are explained here: http://davidshariff.com/blog/javascript-inheritance-patterns/.  Thankfully, you only have to know about these because you may run across them when debugging in your browser.  In ES6 (and Typescript), inheritance is quite sane and straightforward, as below:

```javascript
class Employee extends Person {
  constructor(first, last, id) {
    super(first, last);
    this.id = id;
  }
  
  fullIdentification() {
    return this.id + ": " + this.fullNameReversed();
  }
}
```

### The this Keyword

The keyword this is probably the most difficult concept to fully understand in Javascript.  Which may sound crazy if you're used to Java, where it's completely obvious what this does.  The intro touched on this by introducing a confusing case where calling the fullName function without using either dot or bracket notation gave a fullname of undefined, undefined.  Here's another example that is more similar to code you may write for frontend applications:

```javascript
class ValueContainer {
  constructor(value) {
    this.value = value;
  }
  
  createValueSetterCallback() {
    return function(newValue) {
      this.value = newValue;
    }
  }
}

var container = new ValueContainer(5);
var valueSetter = {};
valueSetter.set = container.createValueSetterCallback();
valueSetter.set(10); // this gets bound to valueSetter
container.value === 5;
valueSetter.value === 10;
```

Huh?  Ok, what did we try to do here?  We have a class that just contains a value, and we want to be able to hand out a function that allows another piece of code to reach in and change our value (this is a typical pattern for managing state in React applications).  But instead what happened is that, like the intro said, the this keyword got bound to whatever is to the left of the dot in the method call statement as noted by the comment in the code.  Thus, the previously undefined property "value" of valueSetter gets set to 10 instead setting container's value to 10.

We can fix this with a very common pattern you'll see and use, which is to use the bind method provided by function objects in Javascript.  Here's what the fixed code looks like:

```javascript
class ValueContainer {
  constructor(value) {
    this.value = value;
  }
  
  createValueSetterCallback() {
    var valueSetter = function(newValue) {
      this.value = newValue;
    }
    return valueSetter.bind(this);
  }
}

var container = new ValueContainer(5);
var valueSetter = {};
valueSetter.set = container.createValueSetterCallback();
valueSetter.set(10); // this is already bound to container
container.value === 10;
valueSetter.value === undefined;
```

bind allows you to enforce the values of parameters to a method, and the first argument to bind always gets bound to this.  You can also bind other parameters, which is sometimes useful, but we won't be going over that in this tutorial.

Finish up reading the intro, and you'll be ready to tackle the second set of exercises in <PLACEHOLDER>.

## Promises and Asynchronous Operations

At this point, you have enough javascript to be able to learn Typescript, React, and Redux, and build some pretty powerful web applications.  However, many of the applications you'll be building and working with talk to some sort of remote backend service (or perhaps many of them in some cases).  This section of the tutorial is all about asynchronous programming in Javascript.

### Promises

Promises are Javascript's asynchronous programming abstraction.  If you're familiar with Java, they may look somewhat familiar to Futures, but they behave differently enough that you'll definitely want to go through the tutorial here to understand how Promises in particular work.

In Javascript, a Promise represents a function to be executed, possibly asynchronously, and what to do once that function finishes executing.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise is a pretty good introduction to the basics of promises, but they're complicated enough that it's worth walking through the details of an example and doing a couple exercises.

Let's take a look at that XMLHttpRequest block of code from the middle of that introduction to promises and unpack the results.  Consider the following block of code:

```javascript
function get(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

get("http://foo.bar.com")
  .then((responseText) => {
    updatePageToDisplay(responseText);
  }).catch((errorStatus) => {
    informUserOfError(errorStatus);
  });
```

What's going on here?  First, we created a new Promise that is going to ship off an XMLHttpRequest and, if successful, will resolve the Promise with the value of the responseText, and if unsuccessful, will reject the promise with the error status code.  The way to get at what a promise resolves to or rejects is to use the then and catch methods.  When we call then on this promise, it's creating a new Promise with the following properties:

* If the original Promise resolves, call the anonymous method we passed in, which in this case will update the page to display the new data we just got, then return a new Promise that resolves to "undefined" since we didn't return anything.
* If the original Promise rejects, then since no rejection handler was provided, return a Promise that rejects with the same value the original Promise rejected with.

More details on what then does can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then.

Then we call catch on the result, which will call our anonymous function, informing the user of an error, if the promise returned by then rejects.  Interestingly, unless an error gets thrown by our callback, catch will actually return a Promise that resolves to the return value of the callback, in this case undefined again, and will only reject if an error gets thrown (in fact, the implementation actually just calls down to then().  More details here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch).

In other words, there's some complicated stuff going on under the hood, but the short answer is that this pattern of createPromiseWithAsyncRequest().then((onSuccess) => doSomething(onSuccess)).catch((onFailure) => handleError(onFailure)) runs the asynchronous call and then does exactly what you'd expect when either successful or unsuccessful.  As such, this pattern is recommended for asynchronous operations.

The Promise.all() method, which returns a Promise that waits for all the input Promises to resolve, and the Promise.race() method, which returns a Promise that resolves to the first input Promise to resolve, are also pretty useful.

### Remoting

The most common asynchronous operation you'll be performing is a remote network request.  The best built-in library for this is XMLHttpRequest, documented (this documentation is a bit hard to understand in terms of how you should actually use it, but we'll provide it in case you're curious) here: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest.  Here's the basic form of how you should use it:

```javascript
var method = "GET";// or "POST", "PUT", "DELETE", etc
var body = {"foo": "bar", {"nested": "json"}};// a json object, can be passed to send() or ommitted.
var request = new XMLHttpRequest();
request.open(method, url);
request.setRequestHeader(headerName, headerValue);
request.setRequestHeader(headerName2, headerValue2); // and so on
request.onload = () => onSuccess(request.responseText); // or whatever other part of hte response is helpful
request.onerror = () => onError(request.statusText); // or whatever other part of the response is helpful
request.send(body);
```

Typically you'd wrap this in a Promise and onSuccess and onError would be the resolve and reject methods, and in fact, there is a library called axios (https://github.com/mzabriskie/axios) commonly used at Palantir for doing this and providing some nicer syntax for making requests, but we won't be covering that directly.

You should now be ready to do the asynchronous programming exercises in <PLACEHOLDER>.

## Further Study

Once you've completed all the exercises, you're in good shape to learn Typescript, React, Redux, and everything else required to build web apps at Palantir.  If you're interested in learning a bit more about the environment you'll be working in, check out the following.

### Debugging in the Browser

Chrome provides a ton of useful tools in the browser to debug problems.  Everything from busted Javascript to playing with your html and css and seeing the results immediately in the browser, to tracking down network performance problems.  http://discover-devtools.codeschool.com/ has a pretty effective tutorial on the tools Chrome provides and is well worth the time spent going through it.

### Build Tools

A ton of stuff happens under the hood to make your applications work.  While most of this is transparent to you, it can be helpful to understand the tools that are making modern web development possible, such as node, yarn, and babel.  <PLACEHOLDER> is a great tutorial on how all these things work together and how you can make the best use of them.

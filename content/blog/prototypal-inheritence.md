---
title: "Understanding Prototype and Prototypal Inheritance in JavaScript"
description: "This blog explains prototypes in javascript with help of examples."
image: "/images/blog/prototypal-inheritence.png"
date: "2020-12-05T11:35:57+06:00"
featured: true
postOfTheMonth: false
author: "Karan Randhir"
categories: ["Javascript"]
tags: ["prototype", "Prototypical Inhertience"]
---

# Understanding Prototype and Prototypal Inheritance in JavaScript

In JavaScript, understanding the concept of prototype and prototypal inheritance is crucial for writing efficient and maintainable code. While JavaScript is often described as a prototype-based language, its inheritance model can be puzzling for developers coming from class-based languages like Java or C++. In this blog post, we'll explore prototype and prototypal inheritance in depth, with numerous examples to illustrate these concepts.

## What is a Prototype?

In JavaScript, each object has a prototype. A prototype is simply a reference to another object. When you access a property or method on an object, JavaScript first checks if that property or method exists directly on the object. If it doesn't, JavaScript looks up the prototype chain until it finds the property or method or reaches the end of the chain.

## Prototypal Inheritance

Prototypal inheritance is the mechanism by which objects in JavaScript inherit properties and methods from other objects. Unlike class-based inheritance found in languages like Java or C++, where classes act as blueprints for creating objects, JavaScript uses prototypes for inheritance.

Let's dive into some examples to better understand how prototype and prototypal inheritance work in JavaScript.

### Example 1: Creating Objects with Prototypes

```javascript
// Creating an object with a prototype
const personPrototype = {
  greet() {
    return `Hello, ${this.name}!`;
  }
};

const john = Object.create(personPrototype);
john.name = "John";
console.log(john.greet()); // Output: Hello, John!
```

In this example, `personPrototype` is an object with a `greet` method. We then create a new object `john` using `Object.create()`, passing `personPrototype` as its prototype. `john` inherits the `greet` method from `personPrototype`.

### Example 2: Constructor Functions

```javascript
// Constructor function
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  return `Hello, ${this.name}!`;
};

const alice = new Person("Alice");
console.log(alice.greet()); // Output: Hello, Alice!
```

Here, we define a constructor function `Person` that takes a `name` parameter and assigns it to the object's `name` property. We then add a `greet` method to the `Person.prototype`. When we create a new `Person` object using the `new` keyword, it inherits the `greet` method from `Person.prototype`.

### Example 3: ES6 Classes

```javascript
// ES6 Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}

const dog = new Dog("Buddy");
console.log(dog.speak()); // Output: Buddy barks.
```

While ES6 introduced class syntax to JavaScript, under the hood, it still uses prototype-based inheritance. In this example, `Dog` extends `Animal`, inheriting its properties and methods through the prototype chain.

## Conclusion

Understanding prototype and prototypal inheritance is essential for writing clean, efficient JavaScript code. By leveraging prototypes, you can create reusable code and build complex object relationships. Experiment with the examples provided and explore further to deepen your understanding of these concepts. Happy coding!

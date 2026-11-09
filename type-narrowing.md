# What is Type Narrowing in TypeScript?

One of the most crucial things we need to care about in TypeScript is the idea of Type Narrowing. If you don’t understand this properly you will never be able to have a good grasp on TypeScript. Today I will make it simple for you.

So with that in mind, let’s start off with the definition : Type narrowing is the process of narrowing a broader type into a specific type. In TypeScript we have top types like `any` and `unknown`. For now let’s take the `unknown` type for our narrowing example, if we were to narrow `unknown` down to more specific types maybe a string or an object. Here’s what we need : Type Guards.

You might be wondering what is a Type Guard ?
Good question, a type guard is simply a run-time check that lets you narrow down the type of a variable within a conditional block. Here the important thing to note is this (conditional block). That means within a conditional block, TypeScript can understand the more specific type of a variable based on the condition. Let’s have a look at some examples :

```typescript
function printId(value: unknown) {
  if (typeof value === "string") {
    // TypeScript knows `value` is a string here
    console.log(value.toUpperCase()); // so you can use any method related to string type
  }
}
```

Common type guards are : `typeof`, `in`, `instanceof`, discriminated unions etc.
Lemme give you more examples of narrowing with `in` and `instanceof` operators:

```typescript
type Dog = { bark: () => void };
type Cat = { meow: () => void };

function makeSound(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // Narrowed to Dog
  } else {
    animal.meow(); // Narrowed to Cat
  }
}
```

```typescript
function checkDate(value: unknown): void {
  if (value instanceof Date) {
    console.log(value.toISOString());
  }
}
```

The bottom line is, if you want to narrow down a type, you need to understand how type guards work. They help TypeScript identify the specific type of a variable within a "conditional block", allowing you to safely use type specific properties and methods.

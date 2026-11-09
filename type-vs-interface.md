# What are the core differences between type aliases and interface in TypeScript? When should you choose one over the other?

Today we’ll find out the truth by seeing what kind of problem they solve. To be honest, there is no short answer. It’s based on the use case.

First up, both type aliases and interfaces help us create reusable types. Starting with type aliases, they help us create any type you could possibly imagine for instance : primitive, literal, union and even objects etc. Here’s some examples :

```typescript
type Username = string;
type Age = number;
type Status = "active" | "inactive";
type User = {
  id: number;
  name: string;
  email: string;
};
```

On the other hand, an interface can only be used with objects and classes, it can't describe union or primitive values. Here’s how you can declare an interface :

```typescript
interface Person {
  name: string;
  age: number;
}
```

The special feature interfaces have, which makes them very special, is what we call declaration merging. When two interfaces are declared with the same name, guess what? They merge together. This feature becomes useful when we’re dealing with an existing type like Window or the Global Object. And it is also widely used when we work with library stuff.

```typescript
interface Settings {
  theme: string;
}
interface Settings {
  language: string;
}

const settings: Settings = { theme: "dark", language: "en" };
```

Another difference is how they extend. Interfaces use `extends`, while type aliases use the intersection operator `&`.

```typescript
interface Student extends Person {
  roll: number;
}
type Teacher = Person & { subject: string };
```

The bottom line is, you can use type aliases everywhere in your code no matter it is an object or map or union type, it is versatile and super flexible. But for describing objects it is better to use interface over type aliases. As TypeScript suggests we should use interface unless we need the features of type aliases.

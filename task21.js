/*
Task3: Create an object config and use Object.defineProperty to add a property SECRET_KEY that:
Has the value "xyz123".
Is non‑writable (cannot be reassigned).
Is non‑enumerable (does not show up in for…in or Object.keys).
Is non‑configurable (cannot be deleted or reconfigured).
Verify each behavior by attempting to change, list, and delete the property.
  */

let config = {};

Object.defineProperty(config, "SECRET_KEY", {
  value: "xyz123",
  writable: false,
  enumerable: false,
  configurable: false,

} )
config.SECRET_KEY = "adsfg";
console.log(config.SECRET_KEY);

delete config.SECRET_KEY;
console.log(config.SECRET_KEY);
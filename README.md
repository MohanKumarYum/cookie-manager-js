# cookie-manager-js

Lightweight, simple and easy cookie management library in JavaScript

![NPM](https://img.shields.io/npm/l/express) ![PyPI - Status](https://img.shields.io/pypi/status/Django)

This is a library for providing more useful and powerful interface to manage your cookies
- No Dependency
- Supports AMD, CommonJS and Node Modules
- Light weight 1KB
- Supported by all browsers


## Installation
Download "cookie-manager.min.js" and include in your project.

```html
<script src="cookie-manager-min.js"></script>
```

## Usage

After including the "cookie-manager.min.js", you will be able to use "CookieManager" object.

You can also load "CookieManager" object in AMD, CommonJS or Node Modules

## Functionalities

### Creating a Cookie
Creating a new cookie
```js
CookieManager.set(name, value, expires, domain, path, secure);
```
- `name (String)` Cookie name
- `value (String)` Cookie name
- `expires (Optional) (Number)` Cookie expiration in days
- `domain (Optional) (String)` Cookie Domain
- `path (Optional) (String)` Cookie Path
- `secure (Optional) (Boolean)` Cookie SSL support Flag

### Retrieving a Cookie
Getting a cookie with given cookie name
```js
CookieManager.get(name);
```
- `name (String)` Cookie name

### Updating a Cookie
Updating an existing cookie
```js
CookieManager.update(name, value, expires, domain, path, secure);
```
- `name (String)` Cookie name
- `value (String)` Cookie name
- `expires (Optional) (Number)` Cookie expiration in days
- `domain (Optional) (String)` Cookie Domain
- `path (Optional) (String)` Cookie Path
- `secure (Optional) (Boolean)` Cookie SSL support Flag

### Deleting a Cookie
Deleting a given cookie name
```js
CookieManager.remove(name);
```
- `name (String)` Cookie name

### Listing All Cookies
Returns all of the existing cookies as an array of objects with key value pairs
```js
CookieManager.getAll();
```
### Clearing All Cookies
Clears all of the existing cookies
```js
CookieManager.clear();
```

## Author and License
Created and maintained by [MohanKumarYum](https://github.com/MohanKumarYum) under [MIT](LICENSE) License

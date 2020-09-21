/**
 *
 *
 * cookie-manager.js
 * simple, easy and lightweight cookie management library
 * 21-Sep-2020 - version 1.0
 * https://github.com/MohanKumarYum/cookie-manager-js
 *
 * Copyright 2020 Mohan Kumar <mohankumaryum@gmail.com>
 * Released under MIT License
 * https://github.com/MohanKumarYum/cookie-manager-js/blob/master/LICENSE
 *
 *
 */

(function (window, document) {
  "use strict";

  var CookieManager = {
    /**
     * Create cookie with given parameters
     * @param {String} name cookie name
     * @param {String} value cookie value
     * @param {Number} [expires] cookie expiration in days
     * @param {String} [domain] cookie domain
     * @param {String} [path] cookie path
     * @param {Boolen} [secure] cookie ssl flag
     * @param {Boolen} [httponly] cookie http only flag
     */
    set: function (name, value, expires, domain, path, secure) {
      let cookieStr = `${name}=${value}`;

      if (expires) {
        const now = new Date();
        now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
        cookieStr += `;expires=${now.toUTCString()}`;
      }
      if (domain) {
        cookieStr += `;domain=${domain}`;
      }
      if (path) {
        cookieStr += `;path=${path}`;
      }
      if (secure) {
        cookieStr += `;secure`;
      }

      // console.log(cookieStr);

      // Create cookie
      document.cookie = cookieStr;
    },

    /**
     * Retrieve cookie value with the given cookie name
     * @param {String} name cookie name
     */
    get: function (name) {
      let cookieValue = "undefined";
      const cookieList = document.cookie.split("; ");

      for (const cookie of cookieList) {
        const cookieKVP = cookie.split("=");

        if (name === cookieKVP[0]) {
          return (cookieValue = cookieKVP[1]);
        }
      }

      return cookieValue;
    },

    /**
     * Update cookie with given parameters
     * @param {String} name cookie name
     * @param {String} value cookie value
     * @param {Number} [expires] cookie expiration in days
     * @param {String} [domain] cookie domain
     * @param {String} [path] cookie path
     * @param {Boolen} [secure] cookie ssl flag
     * @param {Boolen} [httponly] cookie http only flag
     */
    update: function (name, value, expires, domain, path, secure) {
      // Invoke set method of the current object, as updating is same as creating a new cookie.
      this.set(name, value, expires, domain, path, secure);
    },

    /**
     * Remove cookie value with the given cookie name
     * @param {String} name cookie name
     */
    remove: function (name) {
      this.set(name, "", -1);
    },

    /**
     * Retrieve all cookies & its value
     */
    getAll: function () {
      const cookiesArray = [];
      const cookieList = document.cookie.split("; ");

      for (const cookie of cookieList) {
        const cookieKVP = cookie.split("=");

        cookiesArray.push({ key: cookieKVP[0], value: cookieKVP[1] });
      }

      return cookiesArray;
    },

    /**
     * Delete all cookies
     */
    clear: function () {
      const cookiesArray = [];
      const cookieList = document.cookie.split("; ");

      for (const cookie of cookieList) {
        const cookieKVP = cookie.split("=");

        this.remove(cookieKVP[0]);
      }
    },
  };

  // AMD support
  if (typeof define === "function" && define.amd) {
    define(function () {
      return CookieManager;
    });
    // CommonJS and Node.js module support.
  } else if (typeof exports !== "undefined") {
    // Support Node.js specific `module.exports` (which can be a function)
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = CookieManager;
    }
    // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
    exports.CookieManager = CookieManager;
  } else {
    // global.CookieManager = CookieManager;
    window.CookieManager = CookieManager;
  }
})(window, document);

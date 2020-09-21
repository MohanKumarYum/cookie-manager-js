window.onload = function () {
  // Testing set method
  CookieManager.set("name1", "mohan kumar1", 1, "", "",false);
  CookieManager.set("name2", "mohan kumar2", 2, "", "",false);
  CookieManager.set("name3", "mohan kumar3", 3, "", "",false);
  CookieManager.set("name4", "mohan kumar4", 4, "", "",false);
  CookieManager.set("name5", "mohan kumar5", 5, "", "",false);
  CookieManager.set("name6", "mohan kumar6", 6, "", "",false);
  CookieManager.set("name7", "mohan kumar7", 7, "", "", false);
  
  // Testing get method
  console.log(CookieManager.get("name5"));
  
  CookieManager.update("name7", "mohan kumar True", 10);

  CookieManager.remove("name7");

  console.log(CookieManager.getAll());

  CookieManager.clear();

};

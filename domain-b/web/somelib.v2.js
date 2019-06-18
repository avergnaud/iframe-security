window.onload = function() {

  let someframe = document.createElement("iframe");
  someframe.id = "someframe-2";
  let bundleFullURL = document
    .querySelector('script[src$="somelib.v2.js"]')
    .getAttribute("src");
  const contextRootUrl = bundleFullURL.replace("somelib.v2.js", "");
  someframe.setAttribute("src", contextRootUrl + "other-dist/someframe.html");
  someframe.style.width = "640px";
  someframe.style.height = "180px";

  document.body.appendChild(someframe);

  function clickHandler() {
    document
      .getElementById("someframe-2")
      .contentWindow.postMessage("hello world", "http://domain-b:8092");
  }
  document
    .getElementById("some-button")
    .addEventListener("click", clickHandler);
};

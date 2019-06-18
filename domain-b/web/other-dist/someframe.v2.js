window.onload = function() {

  var receiveMessage = function(event) {
    let texte = "received " + event.data + " from " + event.origin;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = texte;
    document.body.appendChild(newDiv);
  };

  if (window.addEventListener) {
    window.addEventListener("message", receiveMessage, false);
  } else {
    window.attachEvent("onmessage", receiveMessage);
  }

};

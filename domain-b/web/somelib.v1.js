(function () { 

    let someframe = document.createElement("iframe");
    someframe.id = "someframe-1"

    /*
    KO : 
        depuis le domain-a, sera chargé par erreur depuis "http://domain-a:8091/someframe.html"
        comment la lib sait-elle depuis quel domaine elle doit charger someframe.html ?
    someframe.setAttribute("src", "someframe.html");
    */
    let bundleFullURL = document.querySelector('script[src$="somelib.v1.js"]').getAttribute('src');
    const contextRootUrl = bundleFullURL.replace("somelib.v1.js","");
    someframe.setAttribute("src", contextRootUrl + "other-dist/someframe.html");

    someframe.style.width = "640px";
    someframe.style.height = "180px";
    document.body.appendChild(someframe);

    function clickHandler() {
        /*
        KO :
            malgré Header set Access-Control-Allow-Origin "*" dans la configuration serveur de domain-b,
            lorsqu'on exécute clickHandler depuis une page de domain-a, on a l'erreur :
                "SecurityError: Permission denied to access property "document" on cross-origin object"
        */
        let someFrameDocument = document.getElementById("someframe-1").contentWindow.document;
        let newDiv = someFrameDocument.createElement("div");
        newDiv.innerHTML = "hello world";
        someFrameDocument.body.appendChild(newDiv);
    }
    document.getElementById("some-button").addEventListener("click", clickHandler);
})();

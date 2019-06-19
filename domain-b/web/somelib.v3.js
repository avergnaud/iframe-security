(function () { 

    let someframe = document.createElement("iframe");
    someframe.id = "someframe"

    /*
    KO : 
        depuis le domain-a, sera chargé par erreur depuis "http://domain-a:8091/someframe.html"
        comment la lib sait-elle depuis quel domaine elle doit charger someframe.html ?
    someframe.setAttribute("src", "someframe.html");
    */
    let bundleFullURL = document.querySelector('script[src$="somelib.v3.js"]').getAttribute('src');
    const contextRootUrl = bundleFullURL.replace("somelib.v3.js","");
    someframe.setAttribute("src", contextRootUrl + "someframe.html");

    someframe.style.width = "100%";
    someframe.style.height = "100%";
    someframe.style.borderWidth = 0;
    document.body.appendChild(someframe);

})();

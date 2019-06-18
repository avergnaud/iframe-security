
 <html>
 <head>
 <meta charset="UTF-8">
  <title>index a</title>
 </head>
 <body>
 <?php
echo '<h1>index a</h1>';
?>
<div>
    <!--
        dans somelib.*.js :
        document.getElementById("some-button").addEventListener("click", clickHandler);
    -->
    <button id="some-button">clic</button>
</div>
<script src="http://domain-b:8092/somelib.v2.js"></script>
 </body>
</html>

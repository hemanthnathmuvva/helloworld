<!DOCTYPE html>
<html>
<body>

<p>Click the button to display the first character of the string "HELLO WORLD".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
  var str = "HELLO WORLD  java script is used to write logical function that has to be performed in the web page";
  var res = str.charAt(4)
   var res = str.charAt(7)
    var res = str.charAt(10)
  document.getElementById("demo").innerHTML = res;
  
}
</script>

</body>
</html>

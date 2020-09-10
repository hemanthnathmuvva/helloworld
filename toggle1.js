
<!DOCTYPE html>
<html>
<head>
<title> jQuery Toggle </title>

<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<style>
div{
width: 130px;
height: 50px;
padding: 15px;
margin: 15px;
background-color: green;
}
</style>
<script>
$(document).ready(function(){
  $(".togglebtn").click(function(){
  $("div").toggle("fast");
  });

});
</script>
</head>
<body>

<div>Toggle - Speed</div>
<button class="togglebtn">Toggle</button>

</body>
</html>

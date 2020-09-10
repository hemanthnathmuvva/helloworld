
<!DOCTYPE html>
<html>
<head>
<title>jQuery Double Click</title>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script> 
$(document).ready(function(){
  $("div").dblclick(function(){
    $( this ).toggleClass("divClass2");
  });
});
  $(document).ready(function(){
  $(".togglebtn").click(function(){
  $("div").toggle("fast");
  });

});
</script>
 
<style> 
.divClass1
{
    padding:5px;
    text-align:center;
    background-color:yellow;
    border:solid 1px;
}
.divClass2
{
    padding:5px;
    text-align:center;
    background-color:grey;
    border:solid 1px;
}
div{
width: 130px;
height: 50px;
padding: 15px;
margin: 15px;
background-color: green;
}
</style>
</head>
<body>
<div class="divClass1">JournalDev</div>
<div>Toggle - Speed</div>
<button class="togglebtn">Toggle</button>

</body>
</html>

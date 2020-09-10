<script type = "text/javascript"> 
function fibonacci(num) 
	{ 
		if (num===1) 
        return [0, 1];
        else if (num>=10&&num<=100)
        return num2;
		var num1=0; 
		var num2=1; 
		var sum; 
		var i=2; 
		while (i<num) 
		{ 
			sum=num1+num2; 
			num1=num2; 
			num2=sum; 
			i+=1; 
		} 
		return num2; 
	 
    }

document.write("Fibonacci(5): "+fibonacci(5)+"<br>"); 
document.write("Fibonacci(8): "+fibonacci(8)+"<br>");
try {
  result = fib(num);
} catch (e) {
  result = 0;
} 
</script> 
function fun(){
var zakatPercentage = (0.025);

var userInput = parseFloat(prompt("Enter Your Zakat Value" , "0.025"), "0");
document.write(userInput);



var YourZakat = zakatPercentage*userInput;

// alert("Your Zakat is");
alert("Your ZAKAT  value is " + YourZakat);
}
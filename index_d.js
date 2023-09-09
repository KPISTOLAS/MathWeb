function diakrinousa(){

    var num1 = parseFloat(document.getElementById("num1").value);
 var num2 = parseFloat(document.getElementById("num2").value);
 var num3 = parseFloat(document.getElementById("num3").value);
 var D;
var x1 = null;
var x2 = null;
var message = null;

    if (isNaN(num1) || isNaN(num2)|| isNaN(num3)) {
        alert("Please enter valid numbers in both fields.");
    } else {
       D = (num2 * num2)-(4*num1*num3);
      if (D<0){
       message = 'Καμια λυση';
      }
      else if(D=0){
        x1 = -1*(num2/(2* num1));
        x2=x1;
        message = 'Μια λυση';
      }
      else{
        x1 = (-1*num2 - Math.sqrt(D ))/(2* num1);
        x2=(-1*num2 + Math.sqrt(D ))/(2* num1);
        message = 'Δυο λυση';
      }
    
         var myVariable1 = x1 ;
         var variableBox1 = document.getElementById("variableBox1");
         variableBox1.innerHTML =  myVariable1;

        var myVariable2 = x2 ;
         var variableBox2 = document.getElementById("variableBox2");
         variableBox2.innerHTML =  myVariable2;
  }
alert(message);

}
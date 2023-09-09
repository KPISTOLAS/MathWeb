function addNumbersAndAlert() {
    // Get the values from the input fields as numbers
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var selector = document.getElementById('selector');
    var selectedObject = selector.options[selector.selectedIndex].value;

    // Check if the inputs are valid numbers
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
    } else {
        // Calculate the sum
    var sum;
    switch (selectedObject){
 case '+':
    sum= num1 + num2;
    break;
    case '-':
    sum= num1 - num2;
    break;
    case '*':
    sum= num1 * num2;
    break;
    case '/':
    sum= num1 / num2;
    break;
    
    }
         var myVariable = sum;
         var variableBox = document.getElementById("variableBox");
         variableBox.innerHTML =  myVariable;
       
    };
};

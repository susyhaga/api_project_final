var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');


numField1.value = "TEST";
resultField.innerText = "TEST 2"

form.addEventListener('submit', function(   ) {
    alert("We clicked in something");

    if (!numField1.value || !numField2.value) {
        alert("Please enter values in the fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        
        alert( x+y);
    }
});
function recupvalue(){
var premier = document.getElementById('premier_nombre').value;
var deuxieme = document.getElementById('deuxieme_nombre').value;
if (isNaN(premier) == true || isNaN (deuxieme) == true) {
  alert("Error");
}
else {
premier = parseFloat(premier);
deuxieme = parseFloat(deuxieme);
var result = premier % deuxieme;
alert(result);
}
}

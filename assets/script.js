
 function check() {
var textname = document.getElementById("text_name_1").value;
var textname1 = document.getElementById("text_name").value;

document.getElementById("errorMessage").innerHTML = '';
document.getElementById("sucsessMessage").innerHTML = '';

if(document.getElementById("text_name_1").value === '' || document.getElementById("text_name").value === '') 
{document.getElementById("errorMessage").innerHTML += "не все поля заполнены, исправьте ошибку";}
else {document.getElementById('sucsessMessage').innerHTML += "Добро пожаловать на сайт, " + textname + " !";}
}



/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validarLogin() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    if (login == "admin" && senha == "web123") {
        window.location.href = "pagina_inincial.html";
        console.log("aqui");
    }
}
function MultiplicacaoT() {
    var base = parseInt(document.getElementById("base").value);
    var altura = parseInt(document.getElementById("altura").value);
    var multi = (base * altura) / 2;
    document.getElementById("areaT");
    document.getElementById("area1").value = multi;
}
function MultiplicacaoQ() {
    var lado = parseInt(document.getElementById("lado").value);
    var multi = lado * lado;
    document.getElementById("areaQ");
    document.getElementById("area2").value = multi;
}
              
/**
 * Descripción
 * @method Nombre de la función
 * @param id A
 * @param valor B
 * @return Valor que retorna
 */
function cambiar(id, valor) {
    if (isNaN(valor)) {
        alert('solo numeros');
        document.unidades.unid_metro.value = "";
    } else if (id === "metro") {
        document.unidades.unid_pulgada.value = 39.37 * valor;
        document.unidades.unid_pie.value = 3.28 * valor;
        document.unidades.unid_yarda.value = 1.09 * valor;
    } else if (id === "yarda") {
        document.unidades.unid_pulgada.value = 36 * valor;
        document.unidades.unid_pie.value = 3 * valor;
        document.unidades.unid_metro.value = 0.9144 * valor;
    } else if (id === "pie") {
        document.unidades.unid_pulgada.value = 12 * valor;
        document.unidades.unid_yarda.value = 0.33 * valor;
        document.unidades.unid_metro.value = 0.3048 * valor;
    } else if (id === "pulgada") {
        document.unidades.unid_yarda.value = 0.027 * valor;
        document.unidades.unid_pie.value = 0.083 * valor;
        document.unidades.unid_metro.value = 0.0254 * valor;
    }
}

function convertir(id) {
    let grad, rad;
    if (id === "grados") {
        grad = document.getElementById('grados').value;
        rad = (grad * Math.PI) / 180;
    } else if (id === "radianes") {
        rad = document.getElementById('radianes').value;
        grad = (rad * 100) / Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function ocultar(elemento) {
    if (elemento === "val_mostrar") {
        document.getElementById("divMO").style.display = "block";

    } else if (elemento === "val_ocultar") {
        document.getElementById("divMO").style.display = "none";
    }
}

function suma() {
    let num1 = Number(document.getElementsByName("sum_num1")[0].value);
    let num2 = Number(document.getElementsByName("sum_num2")[0].value);
    document.getElementsByName("sum_total")[0].innerHTML = num1 + num2;
    let num3 = (document.getElementsByName("res_num1")[0].value);
    let num4 = Number(document.getElementsByName("res_num2")[0].value);
    document.getElementsByName("res_total")[0].innerHTML = num3 - num4;
    let num5 = Number(document.getElementsByName("mul_num1")[0].value);
    let num6 = Number(document.getElementsByName("mul_num2")[0].value);
    document.getElementsByName("mul_total")[0].innerHTML = num5 * num6;
    let num7 = Number(document.getElementsByName("div_num1")[0].value);
    let num8 = Number(document.getElementsByName("div_num2")[0].value);
    document.getElementsByName("div_total")[0].innerHTML = num7 / num8;

}

function cargar() {
    let cant, ud, urlcomp;
    cant = document.getElementById("distancia").value;
    ud = document.getElementsByName("unidades")[0].value;

    urlcomp = "segundaWeb.html#" + "#" + ud;
    window.open(urlcomp);
}

function cargarresultado() {
    let urlComp, can, un;
    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];
    document.getElementById("dist").value = can + "" + un;
}

function cargarlocal() {
    let distancia, unidad;
    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('Pag_2');
}
    function resultadolocal() {
        let cant, un;
        cant = localStorage.getItem("distanciaLS");
        un = localStorage.getItem("unidadesLS");
        document.getElementById("dist").value = cant + " " + un;

    }


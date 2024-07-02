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

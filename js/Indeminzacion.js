var Indemnizacion = /** @class */ (function () {
    function Indemnizacion() {
        //atributos
        this.allos = 0; //años trabajados
        this.sueldo = 0;
        this.bono14 = 0;
        this.aguinaldo = 0;
        this.salarioPendiente = 0;
        this.deuda = 0;
        this.indemnizacion = 0;
    }
    //metodos
    Indemnizacion.prototype.asignarSueldo = function (valor) {
        this.sueldo = valor;
    };
    Indemnizacion.prototype.asignarBono14 = function (valor) {
        this.bono14 = valor;
    };
    Indemnizacion.prototype.asignarAguinaldo = function (valor) {
        this.aguinaldo = valor;
    };
    Indemnizacion.prototype.asignarPendiente = function (valor) {
        this.salarioPendiente = valor;
    };
    Indemnizacion.prototype.asignarDeuda = function (valor) {
        this.deuda = valor;
    };
    Indemnizacion.prototype.asignarindeminzacion = function (valor) {
        this.indemnizacion = valor;
    };
    Indemnizacion.prototype.asignarallo = function (valor) {
        this.allos = valor;
    };
    //calculos meto
    Indemnizacion.prototype.calcularBono = function () {
        this.bono14 = (this.sueldo / 12 * this.allos);
        return "" + this.bono14.toFixed(2);
    };
    Indemnizacion.prototype.calcularAguinaldo = function () {
        this.aguinaldo = (this.sueldo / 12 * this.allos + 5);
        return "" + this.aguinaldo.toFixed(2);
    };
    Indemnizacion.prototype.calcularIndemninzacion = function () {
        this.indemnizacion = ((this.sueldo * this.allos) + this.aguinaldo + this.bono14 + this.salarioPendiente - this.deuda);
        return "Q" + this.indemnizacion.toFixed(2);
    };
    Indemnizacion.prototype.year = function () {
        var fechaInicio = new Date(document.getElementById("fechaInicio").value);
        var fechaFinal = new Date(document.getElementById("fechaFinal").value);
        var diff = fechaFinal.getTime() - fechaInicio.getTime();
        var years = Math.round(diff / (1000 * 60 * 60 * 24 * 30 * 12));
        if (fechaInicio < fechaFinal) {
            if (years <= 1) {
                years = Math.round(diff / (1000 * 60 * 60 * 24 * 30));
                document.getElementById("days").innerHTML = years;
            }
            else {
                years = Math.round(diff / (1000 * 60 * 60 * 24 * 30 * 12));
                document.getElementById("total_years").innerHTML = years;
            }
        }
        else {
            alert("Inserta una fecha mayor a la de inicio");
        }
        return this.allos = years; //years
    };
    return Indemnizacion;
}());
//Manejar doom
var indemnizacion = new Indemnizacion();
function obtenerValores() {
    indemnizacion.asignarSueldo(parseInt(document.getElementById("ingreso_sueldo_base").value));
    indemnizacion.asignarPendiente(parseInt(document.getElementById("ingreso_salario_pendiente").value));
    indemnizacion.asignarDeuda(parseInt(document.getElementById("ingreso_deuda").value));
    console.log(indemnizacion.year());
}
function calcularTiempo() {
    var totalIndemnizacion = document.getElementById("total_indemnizacion");
    var bono = document.getElementById("bono");
    var aguinaldo = document.getElementById("aguinaldo");
    obtenerValores();
    bono.value = indemnizacion.calcularBono();
    aguinaldo.value = indemnizacion.calcularAguinaldo();
    totalIndemnizacion.textContent = indemnizacion.calcularIndemninzacion();
}

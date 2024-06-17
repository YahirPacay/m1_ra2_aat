var Liquido = /** @class */ (function () {
    function Liquido() {
        //atributos
        //ingresos
        this.salario = 0;
        this.bonificacion = 0;
        this.comision = 0;
        this.totalIngreso = 0;
        //egresos
        this.ahorro = 0;
        this.iggs = 4.83;
        this.igsstotal = 0;
        this.prestamo = 0;
        this.totalEgreso = 0;
        this.sueldoLiquido = 0;
    }
    //metodos
    Liquido.prototype.asignarSalario = function (valor) {
        this.salario = valor;
    };
    Liquido.prototype.asignarBonificacion = function (valor) {
        this.bonificacion = valor;
    };
    Liquido.prototype.asignarComision = function (valor) {
        this.comision = valor;
    };
    Liquido.prototype.asignarAhorro = function (valor) {
        this.ahorro = valor;
    };
    Liquido.prototype.asignarPrestamo = function (valor) {
        this.prestamo = valor;
    };
    Liquido.prototype.calcaularIgss = function () {
        this.igsstotal = ((this.salario * this.iggs) / 100);
        return "" + this.igsstotal;
    };
    Liquido.prototype.sumarIgresos = function () {
        this.totalIngreso = this.salario + this.bonificacion + this.comision;
        return "Q" + this.totalIngreso;
    };
    Liquido.prototype.sumarEgresos = function () {
        this.totalEgreso = this.ahorro + ((this.salario * this.iggs) / 100) + this.prestamo;
        return "Q" + this.totalEgreso;
    };
    Liquido.prototype.sumaLiquido = function () {
        this.sueldoLiquido = this.totalIngreso - this.totalEgreso;
        return "Q" + this.sueldoLiquido;
    };
    return Liquido;
}());
var totalLiquido = new Liquido();
function obtenerValores() {
    totalLiquido.asignarSalario(parseFloat(document.getElementById("ingreso_salario").value));
    totalLiquido.asignarBonificacion(parseFloat(document.getElementById("ingreso_bonificacion").value));
    totalLiquido.asignarComision(parseFloat(document.getElementById("ingreso_comision").value));
    totalLiquido.asignarAhorro(parseFloat(document.getElementById("egresos_ahorro").value));
    totalLiquido.asignarPrestamo(parseFloat(document.getElementById("egresos_prestamos").value));
}
function calcularLiquido() {
    var resultadoIngreso = document.getElementById("total_ingreso");
    var resultadoEgreso = document.getElementById("total_egreso");
    var resultadoLiquido = document.getElementById("total");
    var igss = document.getElementById("egresos_igss");
    obtenerValores();
    igss.value = totalLiquido.calcaularIgss();
    resultadoIngreso.textContent = totalLiquido.sumarIgresos();
    resultadoEgreso.textContent = totalLiquido.sumarEgresos();
    resultadoLiquido.innerHTML = totalLiquido.sumaLiquido();
    console.log(totalLiquido.sumarIgresos());
    console.log(totalLiquido.sumarEgresos());
    console.log(totalLiquido.sumaLiquido());
}

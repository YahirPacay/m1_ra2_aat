class Indemnizacion {

    //atributos
    private allos = 0; //años trabajados

    private sueldo = 0;

    private bono14 = 0;
    private aguinaldo = 0;

    private salarioPendiente = 0;
    private deuda = 0;

    private indemnizacion = 0;

    //metodos
    public asignarSueldo(valor: number) {
        this.sueldo = valor;
    }
    public asignarBono14(valor: number) {
        this.bono14 = valor;
    }
    public asignarAguinaldo(valor: number) {
        this.aguinaldo = valor;
    }

    public asignarPendiente(valor: number) {
        this.salarioPendiente = valor;
    }
    public asignarDeuda(valor: number) {
        this.deuda = valor;
    }
    public asignarindeminzacion(valor: number) {
        this.indemnizacion = valor;
    }
    public asignarallo(valor: number) {
        this.allos = valor;
    }




    //calculos meto
    public calcularBono() {
        this.bono14 = (this.sueldo / 12 * this.allos);
        return "" + this.bono14.toFixed(2);
    }

    public calcularAguinaldo() {
        this.aguinaldo = (this.sueldo / 12 * this.allos + 33);
        return "" + this.aguinaldo.toFixed(2);
    }

    public calcularIndemninzacion(): string {
        this.indemnizacion = ((this.sueldo * this.allos) + this.aguinaldo + this.bono14 + this.salarioPendiente - this.deuda);
        return "Q" + this.indemnizacion.toFixed(2);
    }

    year() {
        const fechaInicio = new Date((document.getElementById("fechaInicio") as HTMLInputElement).value);
        const fechaFinal = new Date((document.getElementById("fechaFinal") as HTMLInputElement).value);
        let diff = fechaFinal.getTime() - fechaInicio.getTime();
        let years = Math.round(diff / (1000 * 60 * 60 * 24 * 30 * 12));
        if (fechaInicio < fechaFinal) {
            if (years <= 1) {
                years = Math.round(diff / (1000 * 60 * 60 * 24 * 30));
                document.getElementById("days").innerHTML = years;

            } else {
                years = Math.round(diff / (1000 * 60 * 60 * 24 * 30 * 12));
                document.getElementById("total_years").innerHTML = years;
            }
        } else {
            alert("Inserta una fecha mayor a la de inicio");

        }
        return this.allos = years; //years
    }
}

//Manejar doom
const indemnizacion = new Indemnizacion();

function obtenerValores() {
    indemnizacion.asignarSueldo(parseInt((document.getElementById("ingreso_sueldo_base") as HTMLInputElement).value));
    indemnizacion.asignarPendiente(parseInt((document.getElementById("ingreso_salario_pendiente") as HTMLInputElement).value));
    indemnizacion.asignarDeuda(parseInt((document.getElementById("ingreso_deuda") as HTMLInputElement).value));
    
    console.log(indemnizacion.year());

}

function calcularTiempo() {
    const totalIndemnizacion = document.getElementById("total_indemnizacion");
    const bono = document.getElementById("bono") as HTMLInputElement;
    const aguinaldo = document.getElementById("aguinaldo") as HTMLInputElement;
    
    obtenerValores();

    bono.value = indemnizacion.calcularBono();
    aguinaldo.value = indemnizacion.calcularAguinaldo();
    totalIndemnizacion.textContent = indemnizacion.calcularIndemninzacion();

}

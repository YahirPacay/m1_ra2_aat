class Liquido {
    //atributos
    //ingresos
    private salario = 0;
    private bonificacion = 0;
    private comision = 0;
    private totalIngreso = 0;

    //egresos
    private ahorro = 0;
    private iggs = 4.83;
    private igsstotal = 0;
    private prestamo = 0;
    private totalEgreso = 0;

    private sueldoLiquido = 0;

    //metodos
    public asignarSalario(valor: number) {
        this.salario = valor;
    }
    public asignarBonificacion(valor: number) {
        this.bonificacion = valor;
    }
    public asignarComision(valor: number) {
        this.comision = valor;
    }

    public asignarAhorro(valor: number) {
        this.ahorro = valor;
    }
    public asignarPrestamo(valor: number) {
        this.prestamo = valor;
    }
    public calcaularIgss():string{
        this.igsstotal = ((this.salario * this.iggs )/ 100);
        return "" + this.igsstotal;
    }


    public sumarIgresos(): string {
        this.totalIngreso = this.salario + this.bonificacion + this.comision;
        return "Q" + this.totalIngreso;
    }
    public sumarEgresos(): string {
        this.totalEgreso = this.ahorro + ((this.salario * this.iggs )/ 100) + this.prestamo;
        return "Q" + this.totalEgreso;
    }

    public sumaLiquido(): string {
        this.sueldoLiquido = this.totalIngreso - this.totalEgreso;
        return "Q" + this.sueldoLiquido;
    }
}

const totalLiquido = new Liquido();

function obtenerValores() {
    totalLiquido.asignarSalario(parseFloat((document.getElementById("ingreso_salario") as HTMLInputElement).value)
    );

    totalLiquido.asignarBonificacion(parseFloat((document.getElementById("ingreso_bonificacion") as HTMLInputElement).value)
    );
    totalLiquido.asignarComision(parseFloat((document.getElementById("ingreso_comision") as HTMLInputElement).value)
    );

    totalLiquido.asignarAhorro(parseFloat((document.getElementById("egresos_ahorro") as HTMLInputElement).value)
    );
    totalLiquido.asignarPrestamo(parseFloat((document.getElementById("egresos_prestamos") as HTMLInputElement).value)
    );

}


function calcularLiquido() {
    const resultadoIngreso = document.getElementById("total_ingreso");
    const resultadoEgreso = document.getElementById("total_egreso");
    const resultadoLiquido = document.getElementById("total");

    const igss = document.getElementById("egresos_igss") as HTMLInputElement;

    obtenerValores();
    igss.value = totalLiquido.calcaularIgss();

    resultadoIngreso.textContent = totalLiquido.sumarIgresos();
    resultadoEgreso.textContent = totalLiquido.sumarEgresos();
    resultadoLiquido.innerHTML = totalLiquido.sumaLiquido();
    

    console.log(totalLiquido.sumarIgresos());
    console.log(totalLiquido.sumarEgresos());
    console.log(totalLiquido.sumaLiquido());
}


export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarEmpleados() {
        this.modelo.procesarEmpleados(this.vista.agregarEmpleados());
        this.vista.reportarEmpleados(
            this.modelo.totalHombresEmpresa(),
            this.modelo.porcentajeMujeres()
        )
    }
}
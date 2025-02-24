export default class Cl_vEmpleados {
    constructor () {
        this.vista = document.getElementById("empleadosForm");
        this.inNombre = document.getElementById("empleadosForm_inNombre");
        this.inSexo = document.getElementById("empleadosForm_inSexo");
        this.btAceptar = document.getElementById("empleadosForm_btAceptar");
    }
    get nombre () {
        return this.inNombre.value;
    }
    get sexo () {
        return this.inSexo.value;
    }
    mostrar () {
        this.vista.hidden = false;
    }
    ocultar () {
        this.vista.hidden = true;
    }
}
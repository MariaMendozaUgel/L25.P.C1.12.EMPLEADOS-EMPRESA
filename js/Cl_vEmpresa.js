import Cl_mEmpleados from "./Cl_mEmpleados.js";
import Cl_vEmpleados from "./Cl_vEmpleados.js";
export default class Cl_vEmpresa{
    constructor () {
        this.controlador = null;
        this.mEmpleados = null;
        this.vEmpleados = new Cl_vEmpleados();
        this.vista = document.getElementById("mainForm");
        this.tabla = document.getElementById("mainForm_tabla");
        this.btAgregar = document.getElementById("mainForm_btAgregar");
        this.lblTotalHombresEmpresa = document.getElementById("mainForm_lblTotalHombresEmpresa");
        this.lblPorcentajeMujeres = document.getElementById("mainForm_lblPorcentajeMujeres");
        this.btAgregar.onclick = () => this.ocultar();
        this.vEmpleados.btAceptar.onclick = () => this.controlador.agregarEmpleados();
        this.mostrar();
    }
    agregarEmpleados() {
        this.mEmpleados = new Cl_mEmpleados({
            nombre: this.vEmpleados.nombre,
            sexo: this.vEmpleados.sexo
        });
        this.mostrar();
        return this.mEmpleados;
    } 
    mostrar() {
        this.vista.hidden = false;
        this.vEmpleados.ocultar();
    }
    ocultar() {
        this.vista.hidden = true;
        this.vEmpleados.mostrar();
    }
    reportarEmpleados(totalHombresEmpresa, porcentajeMujeres) {
        this.tabla.innerHTML += `
        <tr>
            <td>${this.vEmpleados.nombre}</td>
            <td>${this.vEmpleados.sexo}</td>
        </tr>`;
        this.lblTotalHombresEmpresa.innerHTML = totalHombresEmpresa;
       this.lblPorcentajeMujeres.innerHTML = porcentajeMujeres;
    }
}
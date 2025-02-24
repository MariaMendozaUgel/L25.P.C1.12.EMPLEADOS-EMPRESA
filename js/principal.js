/*/Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino 
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad 
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa. 
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’), 
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)*/
import Cl_mEmpresa from "./Cl_mEmpresa.js";
import Cl_vEmpresa from "./Cl_vEmpresa.js";
import Cl_controlador from "./Cl_controlador.js";

export default class principal {
    constructor() {
        let vista = new Cl_vEmpresa();
        let modelo = new Cl_mEmpresa();
        let controlador = new Cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}
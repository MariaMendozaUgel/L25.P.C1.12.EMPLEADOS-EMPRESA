/*/Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino 
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad 
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa. 
Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’), 
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)*/
import Cl_empleados from "./Cl_empleados.js";
import Cl_empresa from "./Cl_empresa.js";

let empleado1 = new Cl_empleados("Mary", "F");
let empleado2 = new Cl_empleados("Jose", "M");
let empleado3 = new Cl_empleados("Carlos", "M"); 
let empleado4 = new Cl_empleados("Pedro", "M");

let empresa = new Cl_empresa();

empresa.procesarPersonal(empleado1);
empresa.procesarPersonal(empleado2);
empresa.procesarPersonal(empleado3);
empresa.procesarPersonal(empleado4);

alert("Cantidad de hombres que trabajan en la empresa: " + empresa.totalHombresEmpresa());
alert("Porcentaje de mujeres que trabajan en la empresa: %" + empresa.porcentajeMujeres());
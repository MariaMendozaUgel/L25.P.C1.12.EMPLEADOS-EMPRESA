export default class Cl_empresa {
    constructor() {
        this.contEmpleados = 0;
        this.contMasculinos = 0;
        this.contFemeninos = 0;
    }

    procesarPersonal(p) {
        this.contEmpleados++;
        if (p.sexo == "M") {
            this.contMasculinos++;
        } else {
            this.contFemeninos++;
        }
    }
    totalHombresEmpresa ()  {
        return this.contMasculinos;
    }
    porcentajeMujeres () {
      return (this.contFemeninos / this.contEmpleados) * 100;
    }
}
    
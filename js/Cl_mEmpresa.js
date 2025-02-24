export default class Cl_mEmpresa {
    constructor() {
        this.contEmpleados = 0;
        this.contMasculinos = 0;
        this.contFemeninos = 0;
    }

    procesarEmpleados(p) {
        this.contEmpleados++;
        if (p.sexo == "M") {
            this.contMasculinos++;
        } if (p.sexo == "F") {
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
    
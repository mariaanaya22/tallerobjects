class Prestamo {
  constructor(documentoUsuario, nombreUsuario, valorPrestamo, valorInteres, fechaPrestamo, numeroCuotas) {
   // atrbutos
    this.documentoUsuario = documentoUsuario;
    this.nombreUsuario = nombreUsuario;
    this.valorPrestamo = valorPrestamo;
    this.valorInteres = valorInteres;
    this.fechaPrestamo = fechaPrestamo;
    this.numeroCuotas = numeroCuotas;
 
//metodos 

    // Calcular el valor total del préstamo con intereses
    this.calcularValorTotalPrestamo();
  }

  // Método para calcular el valor total del préstamo con intereses
  calcularValorTotalPrestamo() {
    this.valorPrestamoConIntereses = this.valorPrestamo * (1 + this.valorInteres / 100);
  }

  // Método para calcular el valor de cada cuota con intereses
  valorPagarCuotasIntereses() {
    let cuotaConIntereses = this.valorPrestamoConIntereses / this.numeroCuotas;
    return cuotaConIntereses;
  }

  // Método para calcular el valor de cada cuota sin intereses
  valorPagarCuotas() {
    let cuotaSinIntereses = this.valorPrestamo / this.numeroCuotas;
    return cuotaSinIntereses;
  }

  // Método para pagar una cuota
  pagarCuota(valorPagar) {
    this.valorPrestamoConIntereses -= valorPagar;
    this.valorPrestamoConIntereses = this.valorPrestamoConIntereses < 0 ? 0 : this.valorPrestamoConIntereses;
  }

  // Método para refinanciar el préstamo
  refinanciar(nuevoNumeroCuotas) {
    this.numeroCuotas = nuevoNumeroCuotas;
    this.calcularValorTotalPrestamo(); // Recalcula el valor total con intereses
  }

  // Método para representar la información del préstamo como una cadena
  toString() {
    return `Préstamo {
      Documento Usuario: ${this.documentoUsuario},
      Nombre Usuario: ${this.nombreUsuario},
      Valor Préstamo: ${this.valorPrestamo.toFixed(2)},
      Valor Préstamo con Intereses: ${this.valorPrestamoConIntereses.toFixed(2)},
      Fecha del Préstamo: ${this.fechaPrestamo.toISOString().split('T')[0]},
      Valor Interés: ${this.valorInteres.toFixed(2)},
      Número de Cuotas: ${this.numeroCuotas}
    }`;
  }
}

// Ejemplo de uso:
const prestamo = new Prestamo('6737826283', 'karen rivera', 600000, 7, new Date(), 14);
console.log(prestamo.toString());
console.log('Cuota con intereses:', prestamo.valorPagarCuotasIntereses().toFixed(2));
console.log('Cuota sin intereses:', prestamo.valorPagarCuotas().toFixed(2));
prestamo.pagarCuota(500);
console.log('Valor pendiente con intereses:', prestamo.valorPagarCuotasIntereses().toFixed(2));
prestamo.refinanciar(10);
console.log(prestamo.toString());

    


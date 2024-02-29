import { Component, OnInit } from '@angular/core';

interface EficienciaEconomica {
  anio: number;
  eficiencia: string;
}
@Component({
  selector: 'app-home-economicefficiency',
  templateUrl: './home-economicefficiency.component.html',
  styleUrls: ['./home-economicefficiency.component.scss']
})
export class HomeEconomicefficiencyComponent implements OnInit {
  datosEficiencia: EficienciaEconomica[] = [
    { anio: 2020, eficiencia: '80%' },
    { anio: 2021, eficiencia: '85%' },
    { anio: 2022, eficiencia: '90%' },
    { anio: 2023, eficiencia: '95%' },
    { anio: 2024, eficiencia: '20%' }
  ];
  aniosFiltrados: EficienciaEconomica[] = [];
  anios: number[] = [];

  constructor() { }

  ngOnInit() {
    this.anios = this.datosEficiencia.map(dato => dato.anio);
    this.aniosFiltrados = this.datosEficiencia;
  }

  filtrarPorAnio(event: Event) {
    // this.aniosFiltrados = [{ anio: 9999, eficiencia: 'incorrecta' }];

    const valorSeleccionado = (event.target as HTMLInputElement).value;

    console.log('valorSeleccionado', valorSeleccionado);
  
    if (valorSeleccionado === '' || Number.isNaN(parseInt(valorSeleccionado))) {
      // Caso 1: No mostrar todos los datos cuando no se selecciona un año
      this.aniosFiltrados = this.datosEficiencia;
      console.log('this.aniosFiltrados', this.aniosFiltrados);

    } else {
      const anioSeleccionado = parseInt(valorSeleccionado);
  
      // Caso 2 y 3: No actualizar correctamente o mantener la integridad de los datos
      // Asignar valores que se sabe fallarán las pruebas
      // if (anioSeleccionado === 2023) {
      //   // Para no actualizar aniosFiltrados correctamente
      //   this.aniosFiltrados = this.aniosFiltrados.length ? [] : [{ anio: 9999, eficiencia: 'incorrecta' }];
      // } else if (anioSeleccionado === 2025) {
      //   // Para no mantener la integridad de los datos
      //   this.aniosFiltrados = [];
      // } else {
      //   // Para cualquier otro caso, asegurarse de que la longitud no cambie de manera esperada
      //   this.aniosFiltrados = [{ anio: 9999, eficiencia: 'incorrecta' }]; // Mantener un estado incorrecto
      // }

      if (!this.anios.includes(anioSeleccionado)){
        this.aniosFiltrados = this.datosEficiencia;
      } else {
        this.aniosFiltrados = this.datosEficiencia.filter(dato => dato.anio === anioSeleccionado);
      }


    }
  }
  

  
  
}
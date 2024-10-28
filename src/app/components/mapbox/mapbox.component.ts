import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';




@Component({
  selector: 'app-mapbox',
  template: '<div #mapContainer style="height: 100%; width: 100%;"></div>',
  styleUrls: ['./mapbox.component.scss'],
})
export class MapboxComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;
  map: mapboxgl.Map | undefined;

  ngAfterViewInit() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWF4aW1pbGlhbm9vcnRlZ2EzIiwiYSI6ImNtMnNjdTJvczFsYjcydnE5N3Y1NHc0OWcifQ.fDAKvE1d0T3M0zKU5UIVCg'
    this.map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11', // Estilo del mapa
      center: [-74.5, 40], // Coordenadas iniciales [lng, lat]
      zoom: 9, // Nivel de zoom inicial
    });

    // Opcional: añadir controles de navegación
    this.map.addControl(new mapboxgl.NavigationControl());
  }
}

import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-pasaj',
  templateUrl: './pasaj.page.html',
  styleUrls: ['./pasaj.page.scss'],
})
export class PasajPage implements OnInit {
  map=null;
  private conductor1 = [
    {
      id:'1',
      conductor:'Juan',
      destino:'La Florida',
      precio: '$2000',
      cantidad: '4'
    },
    {
      id:'2',
      conductor:'Pedro',
      destino:'Puente Alto',
      precio:'$1500',
      cantidad:'2'
    }
  ]
  constructor() { }

  ngOnInit(){
    this.loadMap();
  }
  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: -33.516186, lng: -70.597901};
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 16
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });
  }

}


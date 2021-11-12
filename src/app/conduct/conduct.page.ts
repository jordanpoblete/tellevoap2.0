import { Component, OnInit } from '@angular/core';

declare var google;

@Component({
  selector: 'app-conduct',
  templateUrl: './conduct.page.html',
  styleUrls: ['./conduct.page.scss'],
})
export class ConductPage implements OnInit {
  map=null;

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
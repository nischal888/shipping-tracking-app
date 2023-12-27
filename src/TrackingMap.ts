export interface Entity {
  location: {
    lat: number;
    lng: number;
  };
  popUpText(): string;
}

export class TrackingMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 0.5,
      center: {
        lat: 0,
        lng: 20,
      },
    });
  }
  attachMarket(entity: Entity): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
    });
    marker.addListener('click', () => {
      const popup = new google.maps.InfoWindow({
        content: entity.popUpText(),
      });
      popup.open(this.googleMap, marker);
    });
  }
}

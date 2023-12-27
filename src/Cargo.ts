import { faker } from '@faker-js/faker';
import { Entity } from './TrackingMap';

export class Cargo implements Entity {
  trackingId: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.trackingId = faker.string.uuid();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  popUpText(): string {
    return `Cargo ID: ${this.trackingId}`;
  }
}

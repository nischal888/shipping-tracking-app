import { faker } from '@faker-js/faker';
import { Entity } from './TrackingMap';

export class Destination implements Entity {
  receiver: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.receiver = faker.person.firstName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
  popUpText(): string {
    return `Receiver Name: ${this.receiver}`;
  }
}

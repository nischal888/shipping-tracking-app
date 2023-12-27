import { Destination } from './Destination';
import { Cargo } from './Cargo';
import { TrackingMap } from './TrackingMap';

const destination = new Destination();

const cargo = new Cargo();

const trackingMap = new TrackingMap('g-map');
trackingMap.attachMarket(destination);
trackingMap.attachMarket(cargo);

import {images} from '../constant';

// services provider data
export const services = [
  {
    title: 'Truck Operator',
    description: 'I provide trasportation services,\n I won lorries',
    id: '1',
    image: images.truck,
    service: ['Transport Contractor', 'Fleet Owner', 'Agent/Broker'],
  },
  {
    title: 'Shipper',
    description: 'I own the good looking for transportion services',
    id: '2',
    image: images.shipper,
    service: ['Warehousing,', 'Fulfillment,', 'Inbound freight'],
  },
];

// stepbar Array
export const steps = [
  {
    title: 'Dispatch',
    image: images.dispatch,
  },
  {
    title: 'Bid received',
    image: images.bid,
  },
  {
    title: 'Delivery',
    image: images.delivery,
  },
];

// lorries Data
export const lorriesData = [
  {
    id: '1',
    transportType: 'Global Transports',
    vehicleNumber: 'KA05AK0434',
    vahicleImage: images.truck3,
    postedTime: 'Posted at 9:30am',
    expireTime: '8hrs',
    availability: 'Andhra, AP',
    truckDetail: '24.0 ton Truck | 12 Routes',
    driverProfile: images.driver_profile,
    rating: '4.8',
    message: 'Call me immediately, Need Loads like cements,...',
  },
  {
    id: '2',
    transportType: 'Global Transports',
    vehicleNumber: 'KA05AK0434',
    vahicleImage: images.truck3,
    postedTime: 'Posted at 9:30am',
    expireTime: '8hrs',
    availability: 'Andhra, AP',
    truckDetail: '24.0 ton Truck | 12 Routes',
    driverProfile: images.driver_profile,
    rating: '4.8',
    message: 'Call me immediately, Need Loads like cements,...',
  },
];

// Bid Data
export const bidData = [
  {
    id: '1',
    transportType: 'Global Transports',
    status: 'Negotiable',
    location: 'Bengaluru, KA',
    vahicleImage: images.truck4,
    availability: '24.0 ton Truck Available',
    driverProfile: images.driver_profile,
    rating: '4.8',
    message: 'Call me immediately, Need Loads like cements,...',
  },
  {
    id: '2',
    vahicleImage: images.truck4,
    transportType: 'Global Transports',
    location: 'Bengaluru, KA',
    status: 'Negotiable',
    availability: '24.0 ton Truck Available',
    driverProfile: images.driver_profile,
    rating: '4.8',
    message: 'Call me immediately, Need Loads like cements,...',
  },
];

export interface MagnitudeDTO {
    type: string;
    id: number;
    value: number;
    method: string;
    error: number;
  }
  
  export interface LocationDTO {
    id: number;
    latitude: number;
    longitude: number;
    depth: number;
    stringLatitude: string;
    stringLongitude: string;
    quality: string;
  }
  
  export interface Earthquake {
    id: number;
    type: string;
    area: string;
    date: string;
    printdate: string;
    epoch: number;
    level: string;
    classType: string;
    htmlMags: string;
    splitMags: string;
    year: number;
    magnitudos: MagnitudeDTO[];
    location: LocationDTO;
  }
  
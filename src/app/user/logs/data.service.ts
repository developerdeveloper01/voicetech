import { Injectable } from '@angular/core';

export interface PeriodicElement {
  regionsname: string;
  position: number;
  weight: number;
  symbol: string;
  gender?: string;
  mobile?: string;
  tele?: string;
  city?: string;
  address?: string;
  birthday?: string;
  website?: string;
  company?: string;
  email?: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    regionsname: 'Indore',
    weight: 1.0079,
    symbol: 'H',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-12345678',
    city: 'New York',
    address: '555 Lexington Avenue',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 2,
    regionsname: 'bhopal',
    weight: 4.0026,
    symbol: 'He',
    gender: 'male',
    mobile: '13034676675',
    tele: '010-23456781',
    city: 'Shanghai',
    address: '88 Songshan Road',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Helium@gmail.com',
  },

  {
    position: 3,
    regionsname: 'Reewa',
    weight: 9.0122,
    symbol: 'Be',
    gender: 'male',
    mobile: '13765443298',
    tele: '010-45678123',
    city: 'Beijing',
    address: 'chaoyang',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Beryllium@gmail.com',
  },
  {
    position: 5,
    regionsname: 'Dewas',
    weight: 10.811,
    symbol: 'B',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-56781234',
    city: 'Berlin',
    address: 'Bernauer Str.111,13355',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Boron@gmail.com',
  },
];

@Injectable()
export class TablesDataService {
  getData() {
    return ELEMENT_DATA;
  }
}

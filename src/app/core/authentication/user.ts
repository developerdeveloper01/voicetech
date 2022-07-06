import { User } from './interface';

export const admin: User = {
  id: 1,
  name: 'Zongbin',
  email: 'nzb329@163.com',
  avatar: './assets/images/avatar.jpg',
};

export const guest: User = {
  id: null,
  name: localStorage.getItem('role'),
  email: localStorage.getItem('email'),
  avatar: './assets/images/avatar.jpg',
};

import { Injectable } from '@angular/core';

@Injectable()
export class UserData {
  _favorites: string[] = [];
  
  ORDER_EMAIL_TO = 'izac@izaccavalheiro.com';

  constructor() {}
}
import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class JWTService {

  constructor() { }

  public jwt() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const token = JSON.parse(localStorage.getItem("token"));
    if (currentUser && token) {
      const headers = new Headers({ Authorization: "bearer " + token });
      return new RequestOptions({ headers: headers });
    }
  }

}

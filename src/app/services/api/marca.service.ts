import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { GLOBAL } from "./global";
import { JWTService } from '../shared/jwt.service';


@Injectable()
export class MarcaService {
  public url: string;

  constructor(public _http: Http, private jwtService: JWTService) {
    this.url = GLOBAL.url;
  }

  getMarcas() {
    return this._http.get(this.url + "marca").pipe(
      map(res => {
        return res.json();
      })
    );
  }

  saveMarca(marca) {
    if (marca._id) {
      return this._http
        .put(this.url + "marca/" + marca._id, marca, this.jwtService.jwt())
        .pipe(
          map(res => {
            return res.json();
          })
        );
    } else {
      return this._http.post(this.url + "marca", marca, this.jwtService.jwt()).pipe(
        map(res => {
          return res.json();
        })
      );
    }
  }

  deleteMarca(id){
	return this._http.delete(this.url + "marca/"+id, this.jwtService.jwt()).pipe(
        map(res => {
          return res.json();
        })
      );
  }

}

import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

import { GLOBAL } from "./global";
import { JWTService } from '../shared/jwt.service';


@Injectable()
export class EmpresaService {
  public url: string;

  constructor(public _http: Http, private jwtService: JWTService) {
    this.url = GLOBAL.url;
  }

  getEmpresas() {
    return this._http.get(this.url + "empresa").pipe(
      map(res => {
        return res.json();
      })
    );
  }

  saveEmpresa(empresa) {
    if (empresa._id) {
      return this._http
        .put(this.url + "empresa/" + empresa._id, empresa, this.jwtService.jwt())
        .pipe(
          map(res => {
            return res.json();
          })
        );
    } else {
      return this._http.post(this.url + "empresa", empresa, this.jwtService.jwt()).pipe(
        map(res => {
          return res.json();
        })
      );
    }
  }

  deleteEmpresa(id){
	return this._http.delete(this.url + "empresa/"+id, this.jwtService.jwt()).pipe(
        map(res => {
          return res.json();
        })
      );
  }

}

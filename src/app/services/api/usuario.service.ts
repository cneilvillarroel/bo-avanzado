import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { GLOBAL } from './global';


@Injectable()
export class UsuarioService {

    private url: String;
    private apiGraph: String;

    constructor(private _http: Http) {
        this.url = GLOBAL.url; 
    }

    updateUser(usuario){
        return this._http.put(this.url + 'usuario/'+usuario._id, usuario, this.jwt())
        .pipe(
          map(res => { return res.json() })
        );
    }

    deleteUser(usuarioId){
        return this._http.delete(this.url + 'usuario/'+usuarioId, this.jwt())
        .pipe(
          map(res => { return res.json() })
        );
    }

    getUsuarioByEmail(email){
        return this._http
        .get(this.url + 'usuario/' + email).pipe(
          map(res => { return res.json(); })
        );	
    }

    getUsuarios(){
        return this._http
        .get(this.url + 'usuario').pipe(
          map(res => {
            return res.json();
          })
        );		
      }
    

    login(credentials, type) {
        return this._http.post(this.url + type, credentials)
        .pipe(
          map(response => {
            const res = response.json();
            if (res && res.token) {
                localStorage.setItem('currentUser', JSON.stringify(res.usuario));
                localStorage.setItem('token', JSON.stringify(res.token));                
            }
            return res;
          })
        );
    }

    private jwt() {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const token = JSON.parse(localStorage.getItem("token"));
        if (currentUser && token) {
          const headers = new Headers({ Authorization: "Bearer " + token });
          return new RequestOptions({ headers: headers });
        }
      }

}

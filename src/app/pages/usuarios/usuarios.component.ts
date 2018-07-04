import { Component, OnInit } from '@angular/core';
import { UsuarioService, AlertService } from '../../services/service.index';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  loading: Boolean = true;
  usuario: any;
  usuarios: any = [];


  constructor(private usuarioService: UsuarioService, private alertService: AlertService) { }

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuarioService.getUsuarios().subscribe(
      res => {
        this.usuarios = res.usuarios;
      }
    )
  }

}

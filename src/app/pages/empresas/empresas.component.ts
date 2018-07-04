import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EmpresaService, AlertService } from '../../services/service.index';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  @ViewChild('buttonCloseEmpresa') mCloseEmpresa: ElementRef;

  empresas: any = [];
  empresa: any = {};
  constructor(private empresaService: EmpresaService, private alertService: AlertService) { }

  ngOnInit() {
    this.getEmpresas();
  }

  getEmpresas(){
    this.empresaService.getEmpresas().subscribe(
      res => {
        console.log(res);
        this.empresas = res.empresas;
      }
    )
  }

  setEmpresa(empresa){
	  this.empresa = empresa; 
  }

  saveEmpresa(){
    console.log(this.empresa);
	this.empresaService.saveEmpresa(this.empresa).subscribe(
		res => {
        this.alertService.success(res.message, true);
        this.getEmpresas();
        this.mCloseEmpresa.nativeElement.click();
		  },
		  error => {
        console.log(error);
        let mensaje = JSON.parse(error._body).mensaje;
        this.alertService.error(mensaje, false);
		  }
	  )
  }

  resetEmpresa(){
    this.empresa = {rut: '', nombre: '', ciudad: '', ubicacion: '', googleMap: '',fono: '',email: '',horario: '',img: '', usuario: ''};
  }

  deleteEmpresa(){
    this.empresaService.deleteEmpresa(this.empresa._id).subscribe(
		res => {
		  this.alertService.success(res.message, true);		  
		  this.getEmpresas();
		  this.mCloseEmpresa.nativeElement.click();
		},
		error => {
		  console.log(error);
		  let mensaje = JSON.parse(error._body).mensaje;
		  this.alertService.error(mensaje, false);
		}
	  )

  }

}

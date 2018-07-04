import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MarcaService, AlertService } from '../../services/service.index';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit {
@ViewChild('buttonClose') mClose: ElementRef;

  marcas: any = [];
  marca: any = {};
  constructor(private marcaService: MarcaService, private alertService: AlertService) { }

  ngOnInit() {
    this.getMarcas();
  }

  getMarcas(){
    this.marcaService.getMarcas().subscribe(
      res => {
        console.log(res);
        this.marcas = res.marcas;
      }
    )
  }

  setMarca(marca){
	  this.marca = marca; 
  }

  saveMarca(){
	this.marcaService.saveMarca(this.marca).subscribe(
		res => {
			this.alertService.success(res.message, true);
	
			this.getMarcas();
			this.mClose.nativeElement.click();
		  },
		  error => {
			console.log(error);
			let mensaje = JSON.parse(error._body).mensaje;
			this.alertService.error(mensaje, false);
		  }
	  )
  }

  resetMarca(){
    this.marca = {nombre: '', img: ''};
  }

  deleteMarca(){
    this.marcaService.deleteMarca(this.marca._id).subscribe(
		res => {
		  this.alertService.success(res.message, true);		  
		  this.getMarcas();
		  this.mClose.nativeElement.click();
		},
		error => {
		  console.log(error);
		  let mensaje = JSON.parse(error._body).mensaje;
		  this.alertService.error(mensaje, false);
		}
	  )

  }


}

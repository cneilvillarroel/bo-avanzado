import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioService } from "../services/service.index";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public register: Boolean = false;

  public credentials: any = { email: "", password: "" };
  public loading: Boolean = false;
  public errorMsg: string;

  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public usuarioService: UsuarioService
  ) {
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/dashboard";
  }




  ngOnInit() {
    localStorage.clear();
  }


  ingresar() {
    this.loading = !this.loading;

    this.usuarioService.login(this.credentials, 'login').subscribe(
      res => {
          this.router.navigate([this.returnUrl]);
      },
      error => {
        this.errorMsg = JSON.parse(error._body).mensaje;
      }
    );
  }

  swRegister() {
    this.errorMsg = '';
    this.register = !this.register;
  }
}

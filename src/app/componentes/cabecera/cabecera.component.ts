import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicios/login.service';
import { ConfiguracionService } from 'src/app/servicios/configuracion.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  estaLogueado: boolean;
  usuarioLogueado: string;
  permitirRegistro: boolean;
  constructor( private loginService: LoginService,
               private router: Router,
               private configuracionService: ConfiguracionService) { }

  ngOnInit() {
    this.loginService.getAuth().subscribe( auth => {
      if (auth) {
        this.estaLogueado = true;
        this.usuarioLogueado = auth.email;
      } else {
        this.estaLogueado = false;
      }
    });

    this.configuracionService.getConfiguracion().subscribe(
      configuracion => {
        this.permitirRegistro = configuracion.permitirRegistro;
      });
  }

  // metodo que cierra la sesion del usuario
  logout() {
    this.loginService.logOut();
    this.estaLogueado = false;
    this.router.navigate(['/login']);
  }

}

import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {
    constructor( private authService: AngularFireAuth) {

    }
// metodo que recibe un email y un password y controla el login
login(email: string, password: string) {
    return new Promise(( resolve, reject) => {
        this.authService.auth.signInWithEmailAndPassword(email, password)
        .then(datos => resolve(datos),
          error => reject(error)
        );
    });
}

// metodo que devuelve el usuario logueado
getAuth() {
    return this.authService.authState.pipe(
        map( auth => auth)
    );
}

// metodo que cierra sesion
logOut() {
    this.authService.auth.signOut();
}

// metodo que registra un nuevo cliente
registrarse(email: string, password: string) {
    return new Promise((resolve, reject) => {
        this.authService.auth.createUserWithEmailAndPassword(email, password)
          .then(datos => resolve(datos),
          error => reject(error));
    });
}
}

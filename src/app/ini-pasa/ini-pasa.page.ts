import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
//importar service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-ini-pasa',
  templateUrl: './ini-pasa.page.html',
  styleUrls: ['./ini-pasa.page.scss'],
})
export class IniPasaPage implements OnInit {
  usuario = "";
  clave = "";

  constructor(private login: CrudService,
    private toast: ToastController,
    private router: Router) { }

  async con(txtUsuario:HTMLInputElement, txtClave:HTMLInputElement)
  {
    const valor = await this.login.rescatar(txtUsuario.value);
    if(valor != null)
    {
      if(valor[0].clave === txtClave.value)
      {
        console.log("logueado exitosamente")
        const toast = await this.toast.create({
          message: 'Bienvenido pasajero ' + txtUsuario.value,
          duration: 2000,
          color : "success",
          position: "bottom"
        });
        toast.present();
        this.router.navigate(['/pasaj']);
      }
      else
      {
        console.log("clave incorrecta")
        const toast = await this.toast.create({
          message: 'Contraseña incorrecta',
          duration: 2000,
          color : "danger",
          position: "bottom"
        });
        toast.present();
      }
    }
    else
    {
      console.log("No existe usuario")
      const toast = await this.toast.create({
        message: 'No existe el usuario',
        duration: 2000,
        color : "danger",
        position: "bottom"
      });
      toast.present();
    }
    txtUsuario.value = "";
    txtClave.value = "";
  }

  ngOnInit() {
  }

}


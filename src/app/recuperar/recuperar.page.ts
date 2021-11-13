import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
//importar service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  usuario = "";
  rut = "";
  constructor(private login: CrudService,
    private toast: ToastController,
    private router: Router) { }

  async con(txtUsuario:HTMLInputElement,  txtRut:HTMLInputElement)
  {
    const valor = await this.login.rescatar(txtUsuario.value);
    if(valor != null)
    {
      if(valor[0].rut === txtRut.value)
      {
        console.log("Se le enviara un correo con las instrucciones")
        const toast = await this.toast.create({
          message: 'Se le enviara un correo con las instrucciones ' + txtUsuario.value,
          duration: 5000,
          color : "success",
          position: "bottom"
        });
        toast.present();
        this.router.navigate(['/home']);
      }
      else
      {
        console.log("rut no existe")
        const toast = await this.toast.create({
          message: 'Rut no existe',
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
    txtRut.value = "";
  }

  ngOnInit() {
  }

}

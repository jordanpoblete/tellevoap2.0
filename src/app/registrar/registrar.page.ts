import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { CrudService } from '../crud.service';




@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  usuario = "";
  clave = "";
  rut = "";
  lista = {};

  constructor(private crud: CrudService,
              private toast: ToastController) {}

  ngOnInit() {
  }

  async agregar(txtUsuario:HTMLInputElement, txtClave:HTMLInputElement, txtRut:HTMLInputElement)
  {
    //validar 
    if(txtUsuario.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El usuario no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
      
    }
    else if(txtClave.value.trim().length == 0)
      {
        const toast = await this.toast.create({
          message: 'La clave no fue especificada',
          duration: 2000,
          color : "danger",
          position: "middle"
        });
        toast.present();
        
    }
    else if(txtRut.value.trim().length == 0)
    {
      const toast = await this.toast.create({
        message: 'El rut no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
    else
    {
      const datos = [{
              "usuario": txtUsuario.value,
              "clave": txtClave.value,
              "rut": txtRut.value
                      }]
      await this.crud.agregarConKey(txtUsuario.value, datos); //agregar el dato al storage
      const toast = await this.toast.create({
        message: 'Los datos fueron guardados',
        duration: 2000,
        color : "secondary",
        position: "middle"
      });
      toast.present();
    //Limpia la cajas de texto
    txtUsuario.value ="";
    txtClave.value ="";
    txtRut.value ="";
    }
    
    this.clave = ""; //limpia
    this.rut ="";
  }
  async buscar(txtUsuario:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    if (valor != null){
      // muestra el valor encontrado
      this.usuario = valor[0].usuario;
      this.clave = valor[0].clave;
      this.rut = valor[0].rut;
      //Limpia la cajas de texto
      txtUsuario.value = "";
      this.lista = []; // elimina la lista de la vista
    }
    else 
    {
      this.usuario="";
      this.clave="";
      this.rut="";
      const toast = await this.toast.create({
        message: 'El usuario no fue encontrado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    }
  }
  async eliminar(txtUsuario:HTMLInputElement)
  {
    if(txtUsuario.value.length == 0)
    {
      const toast = await this.toast.create({
        message: 'El usuario no fue especificado',
        duration: 2000,
        color : "danger",
        position: "middle"
      });
      toast.present();
    
    }
      else
      {
        const valor = await this.crud.rescatar(txtUsuario.value);
      if (valor == null)
      {
        const toast = await this.toast.create({
          message: 'El usuario ' + txtUsuario.value + ' no fue encontrado',
          duration: 2000,
          color : "danger",
          position: "middle"
        });
        toast.present();
      }
      else
      {
        this.crud.eliminar(txtUsuario.value)
        const toast = await this.toast.create({
          message: 'El usuario ' + txtUsuario.value + ' fue eliminado',
          duration: 2000,
          color : "danger",
          position: "middle"
        });
        toast.present();
        
        
      }
    }

    this.usuario="";
    this.clave="";
    this.rut="";
    txtUsuario.value ="";
  }

  async actualizar(txtUsuario:HTMLInputElement, txtClave:HTMLInputElement, txtRut:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    this.usuario = valor[0].usuario;
    this.clave = valor[0].clave;
    this.rut = valor[0].rut;

    if (txtUsuario.value.trim().length != 0)
    {
      this.usuario = txtUsuario.value;
    }
  
    if (txtClave.value.trim().length != 0)
    {
      this.clave = txtClave.value;
    }

    if (txtRut.value.trim().length != 0)
    {
      this.rut = txtRut.value;
    }


    const datos = [{"usuario": txtUsuario.value,
                    "clave": txtClave.value,
                    "rut": txtRut.value }];
    await this.crud.agregarConKey(txtUsuario.value,datos);
    txtUsuario.value = "";
    txtClave.value = "";
    txtRut.value = "";
  }

  async listar()
  {
    //limpia la busqueda de la vista
    this.usuario = "";
    this.clave = "";
    this.rut = "";
    //muestra todos los datos registrados
    this.lista = this.crud.listar()
  }

  async con(txtUsuario:HTMLInputElement, txtClave:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    if(valor != null)
    {
      if(valor[0].clave === txtClave.value)
      {
        console.log("logueado exitosamente")
        const toast = await this.toast.create({
          message: 'Bienvenido ' + txtUsuario.value,
          duration: 2000,
          color : "success",
          position: "middle"
        });
        toast.present();
      }
      else
      {
        console.log("clave incorrecta")
        const toast = await this.toast.create({
          message: 'Contraseña incorrecta',
          duration: 2000,
          color : "danger",
          position: "middle"
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
        position: "middle"
      });
      toast.present();
    }
    txtUsuario.value = "";
    txtClave.value = "";
  }

}

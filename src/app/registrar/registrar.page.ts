import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';




@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  usuario = "";
  clave = "";
  lista = {};

  constructor(private crud: CrudService) {}

  ngOnInit() {
  }

  async agregar(txtUsuario:HTMLInputElement, txtClave:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value)
    console.log(valor)
    if (valor == null)
    {        
      const datos = [{"usuario": txtUsuario.value,
                      "clave": txtClave.value }]
      await this.crud.agregarConKey(txtUsuario.value, datos);
      txtUsuario.value = "";
      txtClave.value = "";
    }
    else
    {
      console.log("Ya existe")
    }
  }
  async buscar(txtUsuario:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    this.usuario = valor[0].usuario;
    this.clave = valor[0].clave;
  }

  async eliminar(txtUsuario:HTMLInputElement)
  {
    await this.crud.eliminar(txtUsuario.value);
  }

  async actualizar(txtUsuario:HTMLInputElement, txtClave:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    this.usuario = valor[0].usuario;
    this.clave = valor[0].clave;

    if (txtUsuario.value.trim().length != 0)
    {
      this.usuario = txtUsuario.value;
    }
  
    if (txtClave.value.trim().length != 0)
    {
      this.clave = txtClave.value;
    }


    const datos = [{"usuario": txtUsuario.value,
                    "clave": txtClave.value }];
    await this.crud.agregarConKey(txtUsuario.value,datos);
    txtUsuario.value = "";
    txtClave.value = "";
  }

  async listar()
  {
    this.lista = this.crud.listar();
  }

  async con(txtUsuario:HTMLInputElement, txtClave:HTMLInputElement)
  {
    const valor = await this.crud.rescatar(txtUsuario.value);
    if(valor != null)
    {
      if(valor[0].clave === txtClave.value)
      {
        console.log("logueado exitosamente")
      }
      else
      {
        console.log("clave incorrecta")
      }
    }
    else
    {
      console.log("No existe usuario")
    }
  }

}

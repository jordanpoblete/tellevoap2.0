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
    const datos = [{"usuario": txtUsuario.value,
                    "clave": txtClave.value }]
    await this.crud.agregarConKey(txtUsuario.value, datos);
    txtUsuario.value = "";
    txtClave.value = "";
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

  async listar()
  {
    this.lista = this.crud.listar();
  }

}

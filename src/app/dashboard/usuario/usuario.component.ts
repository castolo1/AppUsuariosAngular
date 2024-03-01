import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  urlImg: string;
  phone: string;
  gender: string;
  loading = true;

  constructor(private aRoute: ActivatedRoute,
              private usuarioService: UsuarioService) {
    this.id = 0;    
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.urlImg = "";
    this.phone = "";
    this.gender = "";
  }

  ngOnInit(): void {
    const idParam = this.aRoute.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      this.getUsuario();
    }
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(data => {
      console.log(data);
      this.firstName = data.data.name;
     /*  this.lastName = data.result.last_name; */
      this.email = data.data.email;
      this.phone = data.data.phone;
      this.gender = data.data.gender;
     /*  this.urlImg = data.result._links.avatar.href; */
      this.loading = false;
    });
  }
}

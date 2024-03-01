import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  @Input() user: any;
  firstName: string;
  email: string;
  id: number;
  constructor() {
    this.firstName = "";
    this.email = "";
    this.id = 0;
  }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }
}

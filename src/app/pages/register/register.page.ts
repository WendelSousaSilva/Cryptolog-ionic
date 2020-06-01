import { AuthService } from './../../services/auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  credentialsForm: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      name:[''],
      username: [''],
      password: ['']
    });
  }

  register() {
    this.authService.register(this.credentialsForm.value).subscribe(res => {
      alert("Cadastro Feito com Sucesso!");
     
    });
  } 
}

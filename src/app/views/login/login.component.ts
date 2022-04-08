import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {
    // this.onSubmit()
  }
  loginModel = new User("","",);
  // userModel = new User ("","")
  mensagem = ""
  
  logar() {
    console.log(this.loginModel)

    this.loginService.login(this.loginModel).subscribe((Response)=>{
     this.router.navigateByUrl('')
    }, (respostaErro)=>{
      this.mensagem = respostaErro.error
      console.log(this.mensagem)
    })
  }
}
  // onSubmit(){
  //   console.log(this.userModel)
  // }


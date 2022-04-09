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
  // userModel = new User ("","")
  loginModel = new User("","",);
  mensagem = ""
  usuarioLogado = ""

  logar() {
    console.log(this.loginModel)

    
    let erroEncontrado = 0;

    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having ", "group ", "insert ", "exec ", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      console.log("palavra atual:", palavra)
      
      if(this.loginModel.email.toLowerCase().includes(palavra)) {
        console.log("Palavra encontrada:", palavra)
        this.mensagem = "Dados inválidos: " + palavra;

        erroEncontrado = 1;
      }

    })

    if (erroEncontrado == 0) {
      this.loginService.login(this.loginModel).subscribe( (response) => {
        this.usuarioLogado = response.body.user.nome
        // console.log(response)
        console.log(this.usuarioLogado)
        // this.router.navigateByUrl('')
      }, (respostaErro) => {
        this.mensagem = respostaErro.error
      })      
    }
  }

}

//     this.loginService.login(this.loginModel).subscribe((Response)=>{
//      this.router.navigateByUrl('')
//     }, (respostaErro)=>{
//       this.mensagem = respostaErro.error
//       console.log(this.mensagem)
//     })
//   }
// }
  // onSubmit(){
  //   console.log(this.userModel)
  // }


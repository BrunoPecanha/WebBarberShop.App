import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  modoRecuperacao = 0;
  senhaNova: string = '';
  confirmaSenhaNova: string = '';
  okParaRedefinirSenha = false;
  
  constructor() {}

  ngOnInit(): void {
  }

  trocarModoRecuperacao(modoRecuperacao: any) {
    this.modoRecuperacao = modoRecuperacao.target.value;
  }

  validarSenhas() {
      if (this.senhaNova === this.confirmaSenhaNova) {
        window.alert("Senha atualizada com sucesso!")
        // chama alguma rotina de atualizar do back
       this.modoRecuperacao = 0;
      }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  cliente: any;
  servicosClienteSelecionado: any;

  recuperarServicosCliente(posicao: number): void {
      var clienteLista = this.clientes.find(x => x.posicao === posicao);
      this.cliente = clienteLista
      this.servicosClienteSelecionado = (clienteLista !== undefined && clienteLista.servicos !== undefined) ? clienteLista.servicos : ''       
  }

  clientes = [
    {
       posicao: 1,
       nome: 'Bruno',
       inicioem: '12:20',
       sobrenome: 'Peçanha',
       ematendomento: true,
       barbeiro: 'Leonardo',
       servicos: [
         {
           nome: 'Corte à máquina'
         },
         {
           nome: 'Tintura'
         }
       ]
    },
    {
     posicao: 2,
     nome: 'Marvin',
     inicioem: '14:17',
     sobrenome: 'Daniel',
     ematendomento: true,
     barbeiro: 'Alisson',
     servicos: [
       {
         nome: 'Corte à máquina'
       },
       {
         nome: 'Disfarce'
       }
     ]
   },  
   {
       posicao: 3,
       nome: 'Anderson',
       inicioem: '',
       sobrenome: 'Honório',
       ematendomento: false,
       barbeiro: 'Leonardo',
       servicos: [
         {
           nome: 'Corte à máquina'
         }
       ]
   },
   {
     posicao: 4,
     nome: 'Matheus',
     inicioem: '14:17',
     sobrenome: 'Henrique',
     ematendomento: false,
     barbeiro: 'Indiferente',
     servicos: [
       {
         nome: 'Corte à máquina'
       }
     ]
   },
      {
        posicao: 5,
        nome: 'Peçanha',
        inicioem: '12:20',
        sobrenome: 'Bruno',
        ematendomento: false,
        barbeiro: 'Alisson',
        servicos: [
          {
            nome: 'Corte à máquina'
          },
          {
            nome: 'Tesoura'
          }
        ]
      },
      {
      posicao: 6,
      nome: 'Débora',
      inicioem: '',
      sobrenome: 'Mary',
      ematendomento: false,
      barbeiro: 'Indiferente',
      servicos: [
        {
          nome: 'Corte à máquina'
        },
        {
          nome: 'Tesoura'
        }
      ]
    },
    {
    posicao: 7,
    nome: 'Tereza',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Sombrancelha'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 8,
    nome: 'Diana',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à tesoura'
      },
      {
        nome: 'Sombrancelha'
      }
    ]
    },
    {
    posicao: 9,
    nome: 'Thiago',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 10,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 11,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 12,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 13,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 14,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 15,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 16,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 17,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 18,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 19,
    nome: 'Rose',
    inicioem: '',
    sobrenome: 'Mary',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 20,
    nome: 'Rose',
    inicioem: '',
    ematendomento: false,
    sobrenome: 'Mary',
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
    ]
    },
    {
    posicao: 21,
    nome: 'Rafael',
    inicioem: '',
    sobrenome: 'Matheus',
    ematendomento: false,
    barbeiro: 'Indiferente',
    servicos: [
      {
        nome: 'Corte à máquina'
      },
      {
        nome: 'Tesoura'
      }
 ]
}]

  constructor() { }  

  ngOnInit(): void {
  }
}

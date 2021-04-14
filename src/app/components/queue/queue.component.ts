import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  servicosClienteSelecionado: any;

  recuperarServicosCliente(posicao: number): void {
      var cliente = this.clientes.find(x => x.posicao === posicao);
      this.servicosClienteSelecionado = (cliente !== undefined && cliente.servicos !== undefined) ? cliente.servicos : ''       
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
      inicioem: '12:20',
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
        inicioem: '12:20',
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
      inicioem: '12:20',
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
    posicao: 5,
    nome: 'Rose',
    inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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
  posicao: 5,
  nome: 'Rose',
  inicioem: '12:20',
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



]
 

  constructor() { }

  ngOnInit(): void {
  }

}

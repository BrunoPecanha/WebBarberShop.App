import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  teste = [
     {
        posicao: 1,
        nome: 'Bruno',
        sobrenome: 'Peçanha',
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
      sobrenome: 'Daniel',
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
        sobrenome: 'Honório',
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
      sobrenome: 'Henrique',
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
      sobrenome: 'Bruno',
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
]
 

  constructor() { }

  ngOnInit(): void {
  }
  

}

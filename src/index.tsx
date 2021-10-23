import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
      {
        id: 1,
        title: 'Freelance de website',
        type: 'deposit',
        category: 'Dev',
        amount: 6000,
        createdAt: new Date('2021-02-12 09:00:00'),
      },
      {
        id: 2,
        title: 'Gasolina',
        type: 'withdraw',
        category: 'Carro',
        amount: 250,
        createdAt: new Date('2021-02-13 09:00:00'),
      },
      {
        id: 3,
        title: 'Conta de Luz',
        type: 'withdraw',
        category: 'Gastos Casa',
        amount: 150,
        createdAt: new Date('2021-02-12 09:00:00'),
      },
    ],
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', (schema, request) => {
      return schema.db.transactions;
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.db.transactions.insert(data);
    })


  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Mercado',
          amount: 400,
          type: 'withdraw',
          category: 'Food',
          createdAt: new Date(),
        },
        {
          id: 1,
          title: 'Desenvolvimento website',
          amount: 10000,
          type: 'deposit',
          category: 'Development',
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface DTO {
  id: string;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<DTO[]>([]);

  useEffect(() => {
    api.get('/transactions').then(resp => setTransactions(resp.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions &&
            transactions.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === 'withdraw' ? '-' : ''} R$
                  {transaction.amount}
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}

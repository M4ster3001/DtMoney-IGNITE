import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [newTransactionIsOpen, setNewTransactionIsOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionIsOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionIsOpen(false);
  }

  return (
    <>
      <Header
        onOpenNewTransactionModal={() => {
          handleOpenNewTransactionModal();
        }}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={newTransactionIsOpen}
        onRequestClose={() => {
          handleCloseNewTransactionModal();
        }}
      />
      <GlobalStyle />
    </>
  );
}

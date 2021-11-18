import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./TransactionsContext";

function App() {
  const [isNewTransactionsOpenModal, setIsNewTransactionsOpenModal] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsOpenModal(true)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsOpenModal(false)

  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard/>

      <NewTransactionModal 
        isOpen={isNewTransactionsOpenModal} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

export default App;

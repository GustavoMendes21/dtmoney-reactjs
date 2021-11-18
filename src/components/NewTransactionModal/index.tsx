import  { FormEvent, useContext, useState } from "react"
import Modal from "react-modal"
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg"
import outcomeImg from "../../assets/outcome.svg"
import { TransactionsContext } from "../../TransactionsContext"
import { Container, TransactionTypeContainer, RadioBox } from "./styles"


interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


Modal.setAppElement("#root")

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
  const { createNewTransaction } = useContext(TransactionsContext)

  const [ type, setType ] = useState("deposit")
  const [ title, setTitle ] = useState("")
  const [ amount, setAmount ] = useState(0)
  const [ category, setCategory ] = useState("")


  async function handleCreateNewTransaction (event: FormEvent) {
    event.preventDefault()
    const transaction = {
      title,
      amount,
      category,
      type
    }
    await createNewTransaction(transaction)

    onRequestClose()
    setType("deposit")
    setTitle("")
    setAmount(0)
    setCategory("")
  }

  return(
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose }
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>


      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>  
        
        <input 
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />  
        <input 
          type="number"
          placeholder="Valor"
          onChange={(event) => setAmount(Number(event.target.value))}
          value={amount}
        />  

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saídas" />
            <span>Saídas</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />  

        <button type="submit">Cadastrar</button>
      </Container>

    </Modal>
  )
}
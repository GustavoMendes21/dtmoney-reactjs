import Modal from "react-modal"

interface NewTransactionsModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root")

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionsModalProps) {
    
  return(
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose }
    >

  </Modal>
  )
}
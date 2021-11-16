import logo from "../../assets/logo.svg"
import { Container, Content } from "./styles"

interface HeadersProps {
  onOpenNewTransactionModal: () => void
}

export function Header(props: HeadersProps) {
  const { onOpenNewTransactionModal } = props
  
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

      </Content>
    </Container>
  )
}
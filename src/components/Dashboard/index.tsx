import { Summary } from "../Sumary";
import { TransactionTable } from "../TransactionsTable.ts";
import { Container } from "./style";


export function Dashboard() {
  return(
    <Container>
      <Summary/>
      <TransactionTable/>
    </Container>
  )
}
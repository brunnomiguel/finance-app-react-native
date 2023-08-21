import { MotiView } from "moti";
import {
  Item,
  Title,
  Container,
  BalanceValue,
  CurrencySymbol,
  ContentCurrency,
} from "./styles";

export default function Balance() {
  return (
    <MotiView
      from={{ rotateX: "-100deg", opacity: 0 }}
      animate={{ rotateX: "0deg", opacity: 1 }}
      transition={{ type: "timing", delay: 300, duration: 900 }}
    >
      <Container>
        <Item>
          <Title>Saldo</Title>
          <ContentCurrency>
            <CurrencySymbol>R$</CurrencySymbol>
            <BalanceValue>15.00,00</BalanceValue>
          </ContentCurrency>
        </Item>
        <Item>
          <Title>Gastos</Title>
          <ContentCurrency>
            <CurrencySymbol>R$</CurrencySymbol>
            <BalanceValue expenses>8.650,00</BalanceValue>
          </ContentCurrency>
        </Item>
      </Container>
    </MotiView>
  );
}

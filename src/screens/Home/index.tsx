import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";

import { ListRenderItem } from "react-native";
import { Container, ListBalance, Title } from "./styles";
import { IlistBalanceProps } from "../../@types/movements";
import Actions from "../../components/Actions";

const listBalance = [
  {
    id: 1,
    label: "Conta de internet",
    value: 100,
    date: "20/08/2023",
    type: 0,
  },
  { id: 2, label: "Salário", value: 2200, date: "30/07/2023", type: 1 },
  { id: 3, label: "Conta de energia", value: 98, date: "21/08/2023", type: 0 },
  { id: 4, label: "Mercado", value: 600, date: "20/08/2023", type: 0 },
];

export default function Home() {
  const renderItem: ListRenderItem<IlistBalanceProps> = ({ item }) => (
    <Movements item={item} />
  );

  return (
    <Container>
      <Header />
      <Balance />

      <Title>Ultimas movimentações</Title>

      <Actions />

      <ListBalance
        data={listBalance}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item: IlistBalanceProps) => String(item.id)}
        renderItem={renderItem}
      />
    </Container>
  );
}

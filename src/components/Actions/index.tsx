import {
  ActionButton,
  AreaButton,
  ButtonName,
  ContainerScroll,
} from "./styles";

import { AntDesign } from "@expo/vector-icons";

export default function Actions() {
  return (
    <ContainerScroll horizontal={true} showsHorizontalScrollIndicator={false}>
      <ActionButton>
        <AreaButton>
          <AntDesign name="addfolder" size={26} color="#000" />
        </AreaButton>
        <ButtonName>Entradas</ButtonName>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="tagso" size={26} color="#000" />
        </AreaButton>
        <ButtonName>Compras</ButtonName>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="creditcard" size={26} color="#000" />
        </AreaButton>
        <ButtonName>Carteira</ButtonName>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="barcode" size={26} color="#000" />
        </AreaButton>
        <ButtonName>Boletos</ButtonName>
      </ActionButton>

      <ActionButton>
        <AreaButton>
          <AntDesign name="setting" size={26} color="#000" />
        </AreaButton>
        <ButtonName>Conta</ButtonName>
      </ActionButton>
    </ContainerScroll>
  );
}

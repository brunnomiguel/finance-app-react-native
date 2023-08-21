import { useState } from "react";

import { IlistBalanceProps } from "../../@types/movements";

import {
  Content,
  Skeleton,
  TextDate,
  TextLabel,
  Container,
  TextValue,
} from "./styles";
import { AnimatePresence, MotiText, MotiView } from "moti";

export default function Movements({ item }: { item: IlistBalanceProps }) {
  const [showValue, setShowValue] = useState<boolean>(false);

  const treatedNumber = item.value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return (
    <Container onPress={() => setShowValue(!showValue)}>
      <TextDate>{item.date}</TextDate>

      <Content>
        <TextLabel>{item.label}</TextLabel>

        {showValue ? (
          <AnimatePresence>
            <MotiText
              from={{ translateX: 100 }}
              animate={{ translateX: 0 }}
              transition={{ type: "timing", duration: 500 }}
            >
              <TextValue colorSchema={item.type === 0 ? true : false}>
                {item.type === 1 ? treatedNumber : `- ${treatedNumber}`}
              </TextValue>
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <MotiView
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing" }}
            >
              <Skeleton />
            </MotiView>
          </AnimatePresence>
        )}
      </Content>
    </Container>
  );
}

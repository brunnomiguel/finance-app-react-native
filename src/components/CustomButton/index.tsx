import { ButtonText, StyledButton } from "./styles";

interface IcustomButtonProps {
  title: string;
  onPress: () => void;
}

export default function CustomButton({ title, onPress }: IcustomButtonProps) {
  return (
    <StyledButton onPress={onPress} activeOpacity={0.8}>
      <ButtonText>{title}</ButtonText>
    </StyledButton>
  );
}

import { add_icon } from 'constants/assets.constant';
import styled from 'styled-components/native';
const StyledInputContainer = styled.View`
  width: 80%;
  display: flex;
  column-gap: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;
const StyledInput = styled.TextInput`
  width: 100%;
  padding: 0.5rem 0.85rem;
  border: 0.125rem solid aliceblue;
`;
const StyledTaskIcon = styled.Image`
  width: 1.5rem;
  height: 1.5rem;
`;
const Input = ({ value, onChangeText }) => {
  return (
    <StyledInputContainer>
      <StyledInput value={value} onChangeText={onChangeText} />
      <StyledTaskIcon source={add_icon} />
    </StyledInputContainer>
  );
};

export default Input;

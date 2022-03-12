import styled from 'styled-components/native';

export const StyledTaskItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  background: #f9f9f9;
`;
export const StyledTaskLabel = styled.Text``;
export const StyledTaskActions = styled.View`
  display: flex;
  flex-direction: row;
  column-gap: 0.85rem;
  cursor: pointer;
`;
export const StyledTaskIcon = styled.Image`
  width: 1.5rem;
  height: 1.5rem;
`;

import Input from 'components/Input';
import TaskItem from 'components/TaskItem';
import tasks from 'data/tasks';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import styled from 'styled-components/native';

const StyledApp = styled.View`
  display: flex;
  align-items: center;
  flex: 1;
`;
const StyledAppLabel = styled.Text`
  font-size: 2rem;
  width: 100%;
  text-align: center;
  padding: 1rem;
`;
const StyledTaskContainer = styled.View`
  display: flex;
  width: 90%;
  row-gap: 0.85rem;
`;
export default function App() {
  const [todo, setTodo] = useState('');
  return (
    <StyledApp>
      <StatusBar style="auto" />
      <StyledAppLabel>Taskaide</StyledAppLabel>
      <Input value={todo} onChangeText={(text) => setTodo(text)} />
      <StyledTaskContainer>
        {tasks.map((task) => {
          return <TaskItem key={task.id} task={task} />;
        })}
      </StyledTaskContainer>
    </StyledApp>
  );
}

import { remove_icon, done_icon } from 'constants/assets.constant';

import {
  StyledTaskActions,
  StyledTaskIcon,
  StyledTaskItem,
  StyledTaskLabel,
} from './taskItem.style';

const TaskItem = ({ task }) => {
  const { label } = task;

  return (
    <StyledTaskItem>
      {label && <StyledTaskLabel> {label} </StyledTaskLabel>}

      <StyledTaskActions>
        <StyledTaskIcon source={remove_icon} />
        <StyledTaskIcon source={done_icon} />
      </StyledTaskActions>
    </StyledTaskItem>
  );
};

export default TaskItem;

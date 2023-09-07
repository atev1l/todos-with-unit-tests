import React from 'react';
import { Task } from '../../../types/Task'
import {TabItem, Span, Container} from "../../../styles/TabItemStyles";
import Checkbox from "./Checkbox";

interface TodoItemProps {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask }) => {
    return (
        <Container>
            <TabItem>
                <Checkbox handleCheckboxChange={() => toggleTask(task.id)} isChecked={task.completed} />
                <Span line={task.completed ? 'line-through' : 'none'}>
                      {task.text}
                </Span>
            </TabItem>
        </Container>
    );
};

export default TodoItem;

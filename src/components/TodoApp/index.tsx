import React, {useState} from 'react';
import { Task } from '../../types/Task'
import { Tabs } from '../../types/Tabs'
import TodoItem from "./components/TodoItem";
import TabsGroup from "./components/TabsGroup";
import {Container, Title, WhiteForm, Input, TodoContainer, SettingsPanel, Tab} from "../../styles/TodoAppStyles";


const Index: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTask] = useState<string>('');
    const [activeFilter, setActiveFilter] = useState<Tabs>('all');

    const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTask.trim() !== '') {
            const newTaskItem: Task = {
                id: tasks.length + 1,
                text: newTask,
                completed: false,
            };
            setTasks([...tasks, newTaskItem]);
            setNewTask('');
        }
    };

    const toggleTask = (id: number) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? {...task, completed: !task.completed} : task
        );
        setTasks(updatedTasks);
    };

    const clearCompleted = () => {
        const uncompletedTasks = tasks.filter((task) => !task.completed);
        setTasks(uncompletedTasks);
    };

    const deleteTask = (id: number) => {
        const filteredTasks = tasks.filter((task) => task.id !== id);
        setTasks(filteredTasks);
    };

    const filteredTasks = tasks.filter((task) => {
        switch (activeFilter) {
            case 'completed':
                return task.completed;
            case 'uncompleted':
                return !task.completed;
            default:
                return true; // 'all' - показать все задачи
        }
    });

    const remainingTasksCount = tasks.filter((task) => !task.completed).length + ' items left';
    return (
        <Container>
            <div>
                <Title>todos</Title>
                <WhiteForm>
                    <label>
                        <Input
                            type="text"
                            placeholder="What needs to be done?"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            onKeyDown={addTask}
                        />
                    </label>
                    <TodoContainer>
                        {filteredTasks.map((task) => (
                            <TodoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
                        ))}
                    </TodoContainer>
                    <SettingsPanel>
                        <Tab> {remainingTasksCount}</Tab>
                        <TabsGroup activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                        <Tab onClick={() => clearCompleted()}>Clear completed</Tab>
                    </SettingsPanel>
                </WhiteForm>
            </div>
        </Container>
    );
};

export default Index;

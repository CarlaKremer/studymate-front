import React, { useState } from 'react';

import { Container, Item, TextInput } from './styles';

interface Task {
  text: string;
  complete: boolean;
}

export default function Todo() {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<Task[]>([]);
 
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addTask(task);
    }
};

  const addTask = (text: string):void =>{
    const newTask:Task[] = [...taskList, {text, complete: false}]
    setTaskList(newTask);
    setTask('');
  }

  const removeTask = (index:number):void =>{
    const tasks: Task[] = [...taskList];
    tasks.splice(index, 1);
    setTaskList(tasks);
  }
return (
  <Container>
    <div className="list">
    {taskList.map((task: Task, index: number) => {
      return (
        <Item key={index}>
          <input type='checkbox' />
          <p>{task.text}</p>
          <button onClick={(): void =>removeTask(index)}>X</button>
        </Item>
      );
    })}
    </div>
    <TextInput className='input' onKeyDown={handleKeyPress} onChange={(e) => setTask(e.target.value)} placeholder='add a todo' value={task}/>
  </Container>
);
}
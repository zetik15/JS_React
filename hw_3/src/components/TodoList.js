import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import './TodoList.css';
import { useState } from 'react';

export default function TodoList() {
    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useState([]);

    const handleChangeInput = (e) => {
        setInput(e.target.value);
    }

    const addTodo = () => {
        if (input.trim() !== '') {
            setTodoList([...todoList, input]);
            setInput('');
        }
    }

    const removeAllTodo = () => {
        setTodoList([]);
        setInput('');
    }

    const deleteTodo = (index) => {
        const newTodoList = todoList.filter((_, i) => i !== index);
        setTodoList(newTodoList);
    }

    return (
        <div className='container'>
            <div className='input-group'>
                <div className="inputField">
                    <TextField id="todo" label="Новая задача" variant="standard" fullWidth onChange={handleChangeInput} value={input}/>
                </div>
            </div>

            <div className="buttonGroup">
                <Button className="addButton" variant="contained" onClick={addTodo}>Добавить</Button>
                <Button className="resetButton" variant="outlined" onClick={removeAllTodo}>Очистить список</Button>
            </div>
            
            <div className="todoList">
                {todoList.map((todo, index) => (
                    <div key={index} className='todoItem'>
                        <span className='todoText'>{todo}</span>
                        <DeleteTwoToneIcon className='deleteIcon' onClick={() => deleteTodo(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../asyncActions/asyncThunk';
import './TasksComponent.css';

export const TasksComponent = () => {
    const { tasks, loading, error } = useSelector(state => state.tasksData);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(fetchTasks());
    }

    return (
        <div className="tasks-container">
            <div className="tasks-header">
                <h1 className="tasks-title">Список задач</h1>
                <button className="load-button" onClick={handleClick}>Загрузить задачи</button>
            </div>
            
            {loading === 'idle' ? (
                <div className="status-message status-idle">
                    <p>Нажмите кнопку для загрузки задач</p>
                </div>
            ) : loading === 'loading' ? (
                <div className="status-message status-loading">
                    <p>Загрузка...</p>
                </div>
            ) : loading === 'failed' ? (
                <div className="status-message status-error">
                    <p>Ошибка: {error}</p>
                </div>
            ) : loading === 'succeeded' && Array.isArray(tasks) && tasks.length > 0 ? (
                <ul className="tasks-list">
                    {tasks.map(task => (
                        <li key={task.id} className="task-item">
                            <div className="task-content">
                                <h3 className="task-title">{task.title}</h3>
                            </div>
                            <span className={`task-status ${task.completed ? 'status-completed' : 'status-pending'}`}>
                                {task.completed ? 'Выполнено' : 'В процессе'}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="status-message status-empty">
                    <p>Задачи не найдены</p>
                </div>
            )}
        </div>
    )
}
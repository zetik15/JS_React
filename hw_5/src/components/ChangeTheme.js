import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from './store';

const ChangeTheme = () => {
    const currentTheme = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const handleChangeTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <div>
            <button onClick={handleChangeTheme}>{currentTheme === 'light' ? 'Тёмная тема' : 'Светлая тема'}</button>
        </div>
    )
}

export default ChangeTheme;
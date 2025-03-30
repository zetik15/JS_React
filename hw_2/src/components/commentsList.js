import { useState } from 'react';
import './commentsList.css';

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "iPhone 14 Pro Max реально годная тема" },
        { id: 2, text: "Progasi - хороший производитель эндуро-мотоциклов из Испании" },
        { id: 3, text: "iPhone - хорошая фирма, но очень дорогая" }
    ]);

    const deleteComment = (indexToDelete) => {
        const updatedComments = [...comments.slice(0, indexToDelete), ...comments.slice(indexToDelete + 1)];
        setComments(updatedComments)
    }

    return (
        <div className='comments-container'>
            <h2 className='comments-title'>Комментарии</h2>
            {comments.map((comment, index) =>(
                <div className='comments-items' key={index}>
                    {comment.text}
                    <button className='comments-delete' onClick={() => deleteComment(index)}>
                        Удалить
                    </button>
                </div>
            ))}
        </div>
    )
}

export default CommentsList;
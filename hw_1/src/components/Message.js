import './Message.scss'

function Message({ text }) {
    return (
        <div className='message'>
            <h4 className='message-text'>{text}</h4>
        </div>
    )
}

export default Message;
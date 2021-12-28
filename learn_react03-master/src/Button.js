const Button = ({ text, reqType, setReqType }) => {
    return (
        <button 
            onClick={() => setReqType(text)}
            type="button"
            className={text === reqType ? "selected" : null}
        >
                {text}
        </button>
    )
}

export default Button;
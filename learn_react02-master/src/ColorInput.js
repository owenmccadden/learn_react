const ColorInput = ({  color, setColor}) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            {/* <label htmlFor="Add Color">Add Color</label> */}
            <input
                id="colorInput"
                autoFocus
                type="text"
                placeholder="Add Color Name"
                value={color}
                onChange={(e) => {
                    setColor(e.target.value)
                    document.getElementById("colorOutput").style.backgroundColor = e.target.value;
                }}
            />
        </form>
    )
}

export default ColorInput
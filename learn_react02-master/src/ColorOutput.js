const ColorOutput = ({ color, setColor }) => {
    return (
        <div id="colorOutput">
            { color == '' ? "Empty Value" :  color}
        </div>
    )
}

export default ColorOutput
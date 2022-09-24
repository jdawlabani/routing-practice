import { useParams } from "react-router-dom";
const ColorInput = props => {
    const {input, color1, color2} = useParams()
    return(
        <div style={{backgroundColor: color2 , color: color1}}>
            {isNaN(input) ?
            <h1>The word is: {input}</h1>:
            <h1>The number is: {input}</h1>}
        </div>
    )
}
export default ColorInput;
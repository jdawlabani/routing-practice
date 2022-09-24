import { useParams } from "react-router-dom";

const Input = props =>{
    const {input} = useParams()
    
    return(
        isNaN(input) ?
        <h1>The word is: {input}</h1>:
        <h1>The number is: {input}</h1>
    )
}
export default Input;
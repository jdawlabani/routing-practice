import { useParams } from "react-router-dom";

const Input = props =>{
    const {input} = useParams()

    return (
        <h1>It worked!</h1>
    )
}

export default Input;
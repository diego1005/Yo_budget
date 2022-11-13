import { useState } from "react"

export const useInputHandler = () => {

    const [inputData, setInputData] = useState({})

    const inputHandler = ({ target }) => {
        const { name, value } = target;
        setInputData({
            ...inputData,
            [name]: value
        })
    }

    return {
        inputData,
        inputHandler,
    }
}

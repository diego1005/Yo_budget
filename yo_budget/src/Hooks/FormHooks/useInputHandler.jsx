import { useState } from "react"

export const useInputHandler = () => {

    const [inputData, setInputData] = useState({})

    const inputHandler = ({ name, value }) => {
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

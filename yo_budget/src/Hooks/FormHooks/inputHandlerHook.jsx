import { useState } from "react"

export const inputHandlerHook = () => {

    const [inputData, setInputData] = useState()

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

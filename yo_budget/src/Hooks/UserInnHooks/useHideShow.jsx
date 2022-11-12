import { useState } from "react"

export const useHideShow = () => {

    //States of register and login divs and buttons to show
    const [register, setRegister] = useState(false);
    const [login, setLogin] = useState(false);

    //To show or hide Register div and button
    const showHideReg = () => {
        setRegister((prevState) => !prevState);
        if (login) {
            setLogin((prevState) => !prevState)
        }
    }
    //To show or hide Login div and button
    const showHideLog = () => {
        setLogin((prevState) => !prevState);
        if (register) {
            setRegister((prevState) => !prevState)
        }
    }

    return {
        register,
        login,
        showHideReg,
        showHideLog,
    }
}

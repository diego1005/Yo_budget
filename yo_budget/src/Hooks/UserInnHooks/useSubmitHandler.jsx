import { useSendForm } from "./useSendForm";

export const useSubmitHandler = () => {

    const { sendLog, sendReg } = useSendForm();

    //Fn for handle submit form action
    const submitHandler = (e, dataForm, file = null) => {
        //Prevent default behaviour
        e.preventDefault();

        const { name } = e.target;

        if (name === "register") sendReg(dataForm, file);
        if (name === "login") sendLog(dataForm);
    }

    return {
        submitHandler
    }
}

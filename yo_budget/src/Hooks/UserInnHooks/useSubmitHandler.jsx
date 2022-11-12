import { useSendForm } from "./useSendForm";

export const useSubmitHandler = () => {

    const { sendLog, sendReg } = useSendForm();

    //Fn for handle submit form action
    const submitHandler = (e, { name }, dataForm) => {
        //Prevent default behaviour
        e.preventDefault();

        if (name === "register") sendReg(dataForm);
        if (name === "login") sendLog(dataForm);
    }

    return {
        submitHandler
    }
}

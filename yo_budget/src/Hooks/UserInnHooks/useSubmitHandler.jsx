import { useSendForm } from "./useSendForm";

export const useSubmitHandler = () => {

    const { loginForm, registerForm } = useSendForm();

    //Fn for handle submit form action
    const submitHandler = (e, dataForm, file = null) => {
        //Prevent default behaviour
        e.preventDefault();

        const { name } = e.target;

        if (name === "register") registerForm(dataForm, file);
        if (name === "login") loginForm(dataForm);
    }

    return {
        submitHandler
    }
}

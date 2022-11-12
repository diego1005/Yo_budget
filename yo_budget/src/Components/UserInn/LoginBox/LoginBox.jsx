import { Form } from "../../Form/Form";
import { loginFormFields } from "../../../Common/Forms/formData";
import "./LoginBox.css";

export const LoginBox = () => {

    const formButton = {
        className: "btn-login",
        value: "Iniciar Sesion",
    }

    return (
        <div className="user-login" >
            <i className="fa-solid fa-user-check userinn-icon login"></i>
            <div className="userinn-title-box">
                <hr />
                <h3 className='inn-title'>Login</h3>
                <hr />
            </div>
            <Form
                formName="login"
                formFields={loginFormFields}
                formButton={formButton}
            />
        </div>
    )
}

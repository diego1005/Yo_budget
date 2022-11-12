import { registerFormFields, formImg } from "../../../Common/Forms/formData";
import { Form } from "../../Form/Form";
import "./RegisterBox.css";

export const RegisterBox = () => {

    const formButton = {
        className: "btn-register",
        value: "Registrar",
    }

    return (
        <div className="user-signin">
            <i className="fa-solid fa-user-plus userinn-icon register"></i>
            <div className="userinn-title-box">
                <hr />
                <h3 className='inn-title'>Register</h3>
                <hr />
            </div>
            <Form
                formName="register"
                formFields={registerFormFields}
                formImg={formImg}
                formButton={formButton}
            />
        </div>
    )
}

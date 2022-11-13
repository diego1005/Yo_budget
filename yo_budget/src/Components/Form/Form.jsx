import { useContext, useRef } from "react";
import { UserContext } from "../../Context/context";
import { FormButton } from "./FormButton/FormButton";
import FormField from "./FormField/FormField";

export const Form = ({ formName, formFields, formImg = null, formButton }) => {

    const { inputData, submitHandler } = useContext(UserContext);
    //Captured input of file
    const file = useRef();

    return (
        <form className="form" name={formName} onSubmit={(e) => submitHandler(e, inputData, file)}>
            {
                formFields.map((formField, idx) =>
                    <FormField
                        key={idx}
                        icon={formField.icon}
                        type={formField.type}
                        name={formField.name}
                        pHolder={formField.pHolder}
                    />
                )
            }
            {
                formImg &&
                <FormField
                    icon={formImg.icon}
                    type={formImg.type}
                    name={formImg.name}
                    ref={formImg.ref}
                    file={file}
                />
            }
            <FormButton className={formButton.className} value={formButton.value} />
        </form>
    )
}

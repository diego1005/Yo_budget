import { inputHandlerHook } from "../../Hooks/FormHooks/inputHandlerHook"
import { FormButton } from "./FormButton/FormButton";
import FormField from "./FormField/FormField";

export const Form = ({ formClass, formName, formFields, formImg, formButton }) => {

    const { inputData, inputHandler } = inputHandlerHook();

    return (
        <form className={formClass} name={formName} onSubmit={submitHandler}>
            {
                formFields.map(formField => {
                    <FormField
                        icon={formField.icon}
                        type={formField.type}
                        name={formField.name}
                        pHolder={formField.pHolder}
                    />
                })
            }
            {
                formImg &&
                <FormField
                    icon={formImg.icon}
                    type={formImg.type}
                    name={formImg.name}
                    ref={formImg.ref}
                />
            }
            <FormButton className={formButton.className} value={formButton.value} />
        </form>
    )
}

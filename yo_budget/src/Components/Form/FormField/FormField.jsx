import { useRef } from "react";

export default FormField = ({ icon = null, type, name, pHolder = null, ref = null }) => {

    //Captured input of file
    const file = useRef();

    return (
        <div className="form-ctr">
            {icon}
            <input
                type={type}
                name={name}
                placeholder={pHolder}
                onChange={inputHandler}
                value={inputData.name}
                ref={ref ? file : ref}
            />
        </div>
    )
}

import React, { useRef, useContext } from "react";
import { UserContext } from "../../../Context/context";

function FormField({ icon = null, type, name, pHolder = null, ref = null }) {

    const { inputData, inputHandler } = useContext(UserContext);

    //Captured input of file
    const file = useRef();

    console.log(file);

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

export default FormField;

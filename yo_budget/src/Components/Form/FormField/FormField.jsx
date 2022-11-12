import React, { useContext } from "react";
import { UserContext } from "../../../Context/context";

function FormField({ icon = null, type, name, pHolder = null, ref = null, file }) {

    const { inputData, inputHandler } = useContext(UserContext);

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

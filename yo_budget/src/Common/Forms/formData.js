//REGISTER DATA FORM

export const registerFormFields = [
    {
        icon: <i className="fa-solid fa-user"></i>,
        type: "text",
        name: "name",
        pHolder: "Name",
    },
    {
        icon: <i className="fa-solid fa-user"></i>,
        type: "text",
        name: "lastname",
        pHolder: "Last Name",
    },
    {
        icon: <i className="fa-solid fa-envelope"></i>,
        type: "email",
        name: "email",
        pHolder: "Email",
    },
    {
        icon: <i className="fa-solid fa-lock"></i>,
        type: "password",
        name: "password",
        pHolder: "Password",
    },
    {
        icon: <i className="fa-solid fa-lock"></i>,
        type: "password",
        name: "confirmPassword",
        pHolder: "ConfirmPassword",
    },
]

export const formImg = {
    icon: <i className="fa-solid fa-image"></i>,
    type: "file",
    name: "file",
    ref: undefined,
}

//LOGIN DATA FORM

export const loginFormFields = [
    {
        icon: <i className="fa-solid fa-envelope"></i>,
        type: "text",
        name: "username",
        pHolder: "Email",
    },
    {
        icon: <i className="fa-solid fa-lock"></i>,
        type: "password",
        name: "password",
        pHolder: "Password",
    },
]
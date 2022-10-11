const signin_form = document.querySelector(".signin-form");
const login_form = document.querySelector(".login-form");

const sendForm = (form, formName) => {
    if (form !== null) {
        form.addEventListener("submit", (e) => {
            //Prevent default behavior
            e.preventDefault();
            //Create payload as new FormData object
            const payload = new FormData(form);
            //Post the payload using fetch
            fetch(`http://localhost:3001/user/${formName}`, {
                method: "POST",
                body: payload
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(err => console.error(err))
        })
    }
}

sendForm(signin_form, "signin");
sendForm(login_form, "login");
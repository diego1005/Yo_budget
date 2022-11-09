export const checkToken = (token) => {
    fetch("http://localhost:3001/user/checkToken", {
        headers: { "authorization": token }
    })
        .then(response => response.json())
        .then(({action, token}) => {
            if (action !== "redirect") {
                //Token active
                // set(data.token);
                return token;
            } else {
                //Token expired
                localStorage.clear();
                return null;
            }
        })
        .catch(err => console.error(err))
}
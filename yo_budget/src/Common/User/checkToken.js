export const checkToken = async (tokenToCheck) => {
    try {
        const response = await fetch("http://localhost:3001/user/checkToken", {
            headers: { "authorization": tokenToCheck }
        });
        const { token } = await response.json();
        return token;

    } catch (error) {
        console.error(error);
    }
}
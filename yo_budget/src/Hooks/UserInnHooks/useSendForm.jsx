import { useHandleView } from '../ViewHooks/useHandleView';

export const useSendForm = () => {

    const { handleView } = useHandleView();

    const sendReg = async (data) => {
        const url = "http://localhost:3001/user/signin";
        let formData = new FormData();
        formData.append("url_img", file.current.files[0])
        for (let key in data) {
            formData.append(key, data[key])
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formData
            });
            const { token } = await response.json();
            localStorage.setItem("token", token);
            handleView("dashboard");
        } catch (error) {
            console.error("error on signin fetch: ", error)
        }
    }

    const sendLog = async (data) => {
        const url = "http://localhost:3001/user/login";
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            });
            const { token } = await response.json();
            localStorage.setItem("token", data.token);
            handleView("dashboard");
        } catch (error) {
            console.error("error on login fetch: ", error)
        }
    }


    return {
        sendLog,
        sendReg,
    }
}

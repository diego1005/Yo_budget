const url = process.env.REACT_APP_API_URL;

export const getByApi = (entity, fn, params) => {
    const fullUrl = params ? `${url + entity}/${fn}/${params}` : `${url + entity}/${fn}`;
    return fetch(fullUrl, {
        headers: { "authorization": localStorage.getItem("token") }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error(err))
}



export const sendByApi = (entity, fn, params, method, body) => {
    const fullUrl = params ? `${url + entity}/${fn}/${params}` : `${url + entity}/${fn}`;
    return fetch(fullUrl, {
        method,
        headers: {
            "Content-type": "application/json",
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify(body)
    })
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.error("este es el error", err))
}
export const apiHandler = (url, method, body) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method,
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            return response.json()
        })
        .then(result => {
            resolve(result)
        })
        .catch(err => {
            reject(`${err}. Something problem with URL`)
        })
    })    
}
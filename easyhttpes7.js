class EasyHTTP {
    // MAKE AN HTTP GET REQUEST
    async get(url) {
        const response = await fetch(url);

        const resData = await response.json();
        return resData;
    }

    // MAKE AN HTTP POST REQUEST
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    // MAKE AN HTTP PUT REQUEST
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }

    // MAKE AN HTTP DELETE REQUEST
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(()=> resolve('Resource Deleted...'))
                .catch(err => reject(err));
        });
    }
}
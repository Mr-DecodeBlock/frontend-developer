class Http {

    constructor () {

        this.url = `https://businesshop.herokuapp.com/api`; // Production
        // this.url = `http://localhost:7000/api/`; // Developer

    }

    async get(path, token) {
        
        try {            

            let headers = {
                'Content-Type': 'application/json'
            };

            if (token) {

                headers = {
                    'Content-Type': 'application/json',       
                    'x-token': token
                }

            }

            const request = await fetch(this.url + path, { headers });
            const response = await request.json();

            return response;

        } catch (e) {
            
            console.log(e);
            return { error: e.message };

        }
    }

    async post(path, data, token = null) {

        try {

            let headers = {
                'Content-Type': 'application/json'
            };

            if (token) {

                headers = {
                    'Content-Type': 'application/json',       
                    'x-token': token
                }

            }

            const body = {
                method: 'POST',
                body: JSON.stringify(data),
                headers
            }
            const request = await fetch(this.url + path, body);
            const response = await request.json();

            return response;

        } catch (e) {
            
            console.log(e);
            return { error: e.message };

        }

    }

    async put(path, data, token, filters) {

        try {

            data.filters = filters;

            const body = {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                }
            }
            const request = await fetch(this.url + path, body);
            const response = await request.json();

            return response;

        } catch (e) {
            
            console.log(e);
            return { error: e.message };

        }

    }

    async delete(path, id, token) {

        try {

            const body = {
            
                method: 'DELETE',
                body: JSON.stringify(id),
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token
                }

            }

            const request = await fetch(this.url + path, body);
            const response = await request.json();

            return response;

        } catch (e) {
            
            console.log(e);
            return { error: e.message };

        }

    }

}

export default Http;
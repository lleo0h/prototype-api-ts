interface IFetch {
    key: string;
    url: string;
}

async function request({key, url}: IFetch) {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({key}),
            headers: {"Content-Type": "application/json"}
        })

        return response.json();
    }

    catch (e) {
        return console.log(`${e}`);
    }
}

request({key: "token123456", url: "http://localhost:3000/lang"})
.then((res: object) => console.log(res));
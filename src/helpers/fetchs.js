const getData = ({ url }) => {
    const data = fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => json);
    return data;
};

export default { getData };

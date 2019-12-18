// Form Data:

fetch("xxx", {
    method: "POST",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'a=1&b2',
}).then(res => res.json()).then(res => res)

let formData = new FormData();
formData.append('a', 1);
formData.append('b', 2);
// body: formData

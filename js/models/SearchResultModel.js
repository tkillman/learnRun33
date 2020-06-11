const data = [
    {
        id : 1,
        name : '[치킨]치킨',
        img : './img/aa.jpg'
    },
    {
        id : 2,
        name : '[피자]피자',
        img : './img/aa.jpg'
    },
]

export default {
    list(query) {
        return new Promise(res => {
            setTimeout(() => {
                res(data)
            }, 200);
        })
    }
}
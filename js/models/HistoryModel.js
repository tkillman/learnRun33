const data = [
    {
      keyword: '검색어1'
    },
    {
      keyword: '검색어2'
    },
    {
        keyword: '검색어3'
    },
    {
        keyword: '검색어4'
    }
  ]

 export default {
    list(query){
        return new Promise(res => {
            setTimeout(() => {
                res(data)
            }, 200);
        })
    }
 } 
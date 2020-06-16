const data = [
    {
      keyword: '이탈리아'
    },
    {
      keyword: '세프의 요리'
    },
    {
        keyword: '제철'
    },
    {
        keyword: '홈파티'
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
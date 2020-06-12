const data = [
    {
      id: 1,
      name: '[키친르쎌] 홈메이드 칠리소스 포크립 650g',
      image: './img/aa.jpg'
    },
    {
      id: 2,
      name: '[키친르쎌] 이탈리아 파티 세트 3~4인분',
      image: 'https://cdn.bmf.kr/_data/product/H503E/300d931e3b8252ed628b6a3c2f56936b.jpg'
    }
  ]
  
  export default {
    list(query) {
      return new Promise(res => {
        setTimeout(()=> {
          res(data)
        }, 200);
      })
    }
  }
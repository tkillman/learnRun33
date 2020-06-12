import View from './View.js'

const tag = '[ResultView]'

const ResultView = Object.create(View)

ResultView.setup = function (el) {
    this.init(el);
}

ResultView.showSearchResult = function (data) {
    console.log(tag, 'showSearchResult()', data);
    this.el.innerHTML = this.parseSearchResult(data);
}

//데이터를 파싱하는 함수
ResultView.parseSearchResult = function(data){
    
    const str = data.reduce((html, item) => {
        console.log(tag, 'reduce()', html, item);
        html += `<li><img src="${item.image}" class="searchResultListImg"/><p>${item.name}</p></li>`
        return html
    }, '<ul>') + '</ul>';

    return str;
}

export default ResultView
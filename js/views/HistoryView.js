import KeywordView from './KeywordView.js'

const tag = '[HistoryView]'

const HistoryView = Object.create(KeywordView)


HistoryView.getKeywordsHtml = function (data) {
    return data.reduce((html, item, index) => {
        html += `<li data-keyword="${item.keyword}">${item.keyword}</li>`
        return html;
    }, '<ul>') + '</ul>';
}   
export default HistoryView
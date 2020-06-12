import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'

import SearchResultModel from '../models/SearchResultModel.js'

const tag = '[MainController]'

export default {
    // 초기설정
    init(){
        console.log(tag, 'init()', FormView);
        FormView.setup(document.querySelector('form'))
            .on('@submit', (e) => this.searchValue(e))

        ResultView.setup(document.querySelector('#searchResultList'));
        
        TabView.setup(document.querySelector('#tab'));
        
    },
    searchValue(e){
        console.log(tag, 'searchValue()',e.detail.inputValue);

        //api 통신
        SearchResultModel.list(e.detail.inputValue).then(data => this.onSearchResult(data))
    },
    onSearchResult(data){
        console.log(tag, 'onSearchResult()', data);
        ResultView.showSearchResult(data);
    }


}
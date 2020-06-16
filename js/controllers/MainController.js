import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
import TabView from '../views/TabView.js'
import HistoryView from '../views/HistoryView.js'
import KeywordView from '../views/KeywordView.js'

import SearchResultModel from '../models/SearchResultModel.js'
import KeywordModel from '../models/KeywordModel.js'
import HistoryModel from '../models/HistoryModel.js'

const tag = '[MainController]'

export default {
    // 초기설정
    init(){
        console.log(tag, 'init()', FormView);
        FormView.setup(document.querySelector('form'))
            .on('@submit', (e) => this.searchValue(e))

        ResultView.setup(document.querySelector('#searchResultList'));
        
        TabView.setup(document.querySelector('#tab'))
                .on('@onChange', e => this.onChangeTab(e.detail.tabName));
        
        HistoryView.setup(document.querySelector('#searchHistoryList'));
        KeywordView.setup(document.querySelector('#searchWordList'));

        this.selectedTab = '추천 검색어'
        this.renderView()
    },
    searchValue(e){
        console.log(tag, 'searchValue()',e.detail.inputValue);

        //api 통신
        SearchResultModel.list(e.detail.inputValue).then(data => this.onSearchResult(data))
    },
    onSearchResult(data){
        console.log(tag, 'onSearchResult()', data);
        ResultView.showSearchResult(data);
    },
    onChangeTab(tabName){
        this.selectedTab = tabName
        this.renderView()
    },
    renderView(){
        TabView.setActiveTab(this.selectedTab);
        
        if (this.selectedTab === '추천 검색어') {
            this.fetchSearchKeyword()
            
            KeywordView.show()
            HistoryView.hide()
        } else {
            console.log(tag, 'renderView()', '2012');
            this.fetchSearchHistory()
            
            HistoryView.show()
            KeywordView.hide()
        }

        ResultView.hide()
    },
    fetchSearchKeyword(){
        KeywordModel.list().then(data => {
            KeywordView.render(data)
        })
    },
    fetchSearchHistory(){
        HistoryModel.list().then(data => {
            HistoryView.render(data)
        })
        HistoryView.show()
    },

}
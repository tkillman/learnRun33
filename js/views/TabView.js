import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View);

TabView.setup = function (el) {
    this.init(el)

    //이벤트를 연결하는 메소드
    this.bindEvents();
    return this    
}

//이벤트를 연결하는 메소드
TabView.bindEvents = function () {
    Array.from(this.el.querySelectorAll('li'), li => {
        li.addEventListener('click', e=> {
            console.log(tag, 'bindEvents()');
            //선택된 탭을 활성화시키는 메소드
            TabView.setActiveTab(li.innerHTML);
            this.emit('@onChange', {tabName : li.innerHTML})
        })
    })
}

// 탭을 활성화시키는 메소드
// 매개변수는 선택된 탭이름
TabView.setActiveTab = function (selectedTabName) {
    console.log(tag, 'setActiveTab()', this.el.querySelectorAll('li'));
    Array.from(this.el.querySelectorAll('li'), li => {
        console.log(li.innerHTML);
        li.className = selectedTabName === li.innerHTML ? 'active' : ''
    })
}

export default TabView;
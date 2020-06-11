import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View);

//초기 설정역할
FormView.setup = function(el) {
    this.init(el)
    console.log(tag, 'setup()', el);
    this.inputEl = this.el.querySelector('[type=text]');
    this.resetEl = this.el.querySelector('[type=reset]');
    FormView.showResetBtn(false)
    FormView.bindEvents();
    return this
}

//이 화면에서 처리될 이벤트를 바인딩
FormView.bindEvents = function () {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onkeyup(e));
    this.resetEl.addEventListener('click', e => this.onResetClick());
}

// 버튼을 보이고 숨기는 역할
FormView.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
}

//keyup 이벤트 발생
FormView.onkeyup = function (e) {
    console.log(tag, 'onkeyup()', this.inputEl.value.length);
    if (this.inputEl.value.length !== 0) {
        FormView.showResetBtn(true);
    } else {
        FormView.showResetBtn(false);
    }

    if (e.keyCode === 13) this.emit('@submit',{inputValue : this.inputEl.value})
}

// reset 버튼을 클릭했을 때 처리
FormView.onResetClick = function () {
    console.log(tag, 'onResetClick()');
    FormView.clearInputValue();
    FormView.showResetBtn(false);
}

// input 박스 내용을 초기화시키는 메소드
FormView.clearInputValue = function () {
    console.log(tag, 'clearInputValue()');
    this.inputEl.value = ''
}


export default FormView
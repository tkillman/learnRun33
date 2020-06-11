const tag = '[view]'

export default {
    init(el){
        if (!el) throw el;
        this.el = el;
        return el;
    },
    on(event, handler) {
        console.log(tag, 'on()');
        this.el.addEventListener(event, handler)
        return this
    },
    emit(event, data){
        const evt = new CustomEvent(event, {detail : data})
        this.el.dispatchEvent(evt)
        return this
    }
}
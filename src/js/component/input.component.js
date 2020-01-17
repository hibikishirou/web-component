class CustomInput extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('input', e => {
            this._value += e.data;
        })
        this.addEventListener('focusout', e => {
            this._updateRendering();
        })
    }

    get value() {
        return this._value;
    }

    set value(v) {
        this._value = v;
        this._updateRendering();
    }

    static get observedAttributes() { return ['value']; }

    connectedCallback() {
        this._updateRendering();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this._value = newValue;
        this._updateRendering();
    }

    _updateRendering() {
        this.innerHTML = `<input value="${this._value}">`;
    }
}

customElements.define('custom-input', CustomInput);
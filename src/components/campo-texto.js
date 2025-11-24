import { LitElement, html, css } from "lit";

class CampoTexto extends LitElement {
  static properties = {
    placeholder: { type: String },
    value: { type: String }
  };

  constructor() {
    super();
    this.placeholder = ""; 
    this.value = "";
  }

  static styles = css`
    textarea {
      font-family: var(--font-general);
      padding: 15px;
      font-size: 12px;
      font-weight: 400;
      width: calc(100% - 34px);
      border: 2px solid var(--border-gray);
      outline: none;
      border-radius: 10px;
      background-color: var(--fondo-100);
      color: var(--texto-black-60);
      resize: none;
      overflow: auto;
    }

    textarea:focus {
      border-color: var(--primario-100);
    }
  `;

  render() {
    return html`
      <textarea
        .value=${this.value}
        placeholder=${this.placeholder}
        @input=${this._onInput}
      ></textarea>
    `;
  }

  _onInput(e) {
    this.value = e.target.value;
  }
}

customElements.define("campo-texto", CampoTexto);

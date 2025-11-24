import { LitElement, html, css } from "lit";

class BotonSecundario extends LitElement {
  static properties = {
    disabled: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.disabled = false;
  }

  static styles = css`
    button {
      font-family: var(--font-general);
      font-size: 16px;
      font-weight: 700;
      padding: 13px 30px;
      border: none;
      border-radius: 10px;
      background-color: var(--secundario-100);
      color: var(--texto-white-100);
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      background-color: var(--secundario-70);
    }

    button:active:not(:disabled) {
      background-color: var(--secundario-80);
    }

    button:disabled {
      background-color: var(--secundario-50);
      cursor: not-allowed;
    }
  `;

  render() {
    return html`
      <button ?disabled=${this.disabled}>
        <slot>Primario</slot>
      </button>
    `;
  }
}

customElements.define("boton-secundario", BotonSecundario);

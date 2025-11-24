import { LitElement, html, css } from "lit";

class BotonEnlace extends LitElement {
  static properties = {
    active: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.active = false;
  }

  static styles = css`
    button {
      font-family: var(--font-general);
      font-size: 18px;
      font-weight: 400;
      padding: 9px 12px;
      height: 100%;
      border: 1px solid var(--border-gray);
      border-radius: 10px;
      background-color: var(--fondo-100);
      color: var(--texto-black-100);
      cursor: pointer;
    }

    button:hover {
      border: none;
      background-color: var(--primario-10);
      color: var(--texto-blue-100);
    }

    button.active {
      border: none;
      background-color: var(--primario-100);
      color: var(--texto-white-100);
    }
  `;

  _toggleState() {
    this.active = !this.active;
  }

  render() {
    return html`
      <button
        class=${this.active ? "active" : ""}
        @click=${this._toggleState}
      >
        <slot>Enlace</slot>
      </button>
    `;
  }
}

customElements.define("boton-enlace", BotonEnlace);

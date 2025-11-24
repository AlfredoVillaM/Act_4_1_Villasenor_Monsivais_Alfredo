import { LitElement, html, css } from "lit";
import "/src/components/etiqueta-texto.js";

class RecomendacionNegativa extends LitElement {
  static properties = {
    selected: { type: Boolean, reflect: true },
  };

  constructor() {
    super();
    this.selected = false;
  }

  static styles = css`
    button {
      padding: 15px;
      width: 100%;
      border: 1px solid var(--border-gray);
      border-radius: 10px;
      background-color: var(--fondo-100);
      color: var(--texto-black-100);
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 15px;
    }

    button:hover {
      background-color: var(--superficie-100);
    }

    button.selected {
      background-color: var(--primario-10);
      border-color: var(--primario-100);
    }

    img {
      width: 32px;
      height: 32px;
    }

    #content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  `;

  _toggleState() {
    this.selected = !this.selected;
  }

  render() {
    return html`
      <button
        class=${this.selected ? "selected" : ""}
        @click=${this._toggleState}
      >
        <img src="/src/assets/icons8-error-48.png" />
        <div id="content">
          <etiqueta-texto>Probablemente no</etiqueta-texto>
          <etiqueta-texto size="chico">No la recomendaría</etiqueta-texto>
        </div>
      </button>
    `;
  }
}

customElements.define("recomendacion-negativa", RecomendacionNegativa);

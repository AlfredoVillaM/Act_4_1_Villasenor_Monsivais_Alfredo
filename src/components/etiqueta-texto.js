import { LitElement, html, css } from "lit";

class EtiquetaTexto extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.size = "mediano";
  }

  static styles = css`
    :host {
      display: inline-block;
      font-family: var(--font-general);
      color: var(--texto-black-100);
    }

    :host([size="grande"]) {
      font-size: 32px;
      font-weight: 700;
    }

    :host([size="mediano"]) {
      font-size: 18px;
      font-weight: 400;
    }

    :host([size="chico"]) {
      font-size: 12px;
      font-weight: 400;
      color: var(--texto-black-60);
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define("etiqueta-texto", EtiquetaTexto);

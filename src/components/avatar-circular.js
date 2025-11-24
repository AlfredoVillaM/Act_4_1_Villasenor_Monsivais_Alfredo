import { LitElement, html, css } from 'lit';

export class AvatarCircular extends LitElement {
  static properties = {
    size: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.size = 'mediano';
  }

  static styles = css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: var(--primario-100);
      color: var(--texto-white-100);
      font-weight: 700;
      text-align: center;
    }

    :host([size="chico"]) {
      width: 32px;
      height: 32px;
      font-size: 12px;
    }

    :host([size="mediano"]) {
      width: 64px;
      height: 64px;
      font-size: 18px;
    }

    :host([size="grande"]) {
      width: 128px;
      height: 128px;
      font-size: 32px;
    }
  `;

  render() {
    return html`<slot></slot>`;
  }
}

customElements.define('avatar-circular', AvatarCircular);

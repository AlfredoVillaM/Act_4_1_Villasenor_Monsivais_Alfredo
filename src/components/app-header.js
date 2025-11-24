import { LitElement, html, css } from "lit";

class AppHeader extends LitElement {
  static properties = {
    logo: { type: String },
    title: { type: String },
  };

  constructor() {
    super();
    this.logo = "";
    this.title = "";
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--primario-100);
    }

    span {
      font-family: var(--font-general);
      font-weight: 700;
      color: var(--texto-white-100);
      text-align: right;
    }

    @media (min-width: 1024px) {
      header {
        flex-direction: row;
        padding: 40px 70px;
        gap: 0;
      }
      img {
        height: 100px;
      }
      span {
        font-size: 32px;
      }
    }

    @media (min-width: 600px) and (max-width: 1023px) {
      header {
        flex-direction: row;
        padding: 30px 50px;
        gap: 16px;
      }
      img {
        height: 75px;
      }
      span {
        font-size: 32px;
      }
    }

    @media (max-width: 599px) {
      header {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 30px;
        gap: 12px;
      }

      img {
        height: 55px;
      }

      span {
        font-size: 18px;
      }
    }
  `;

  render() {
    return html`
      <header>
        <img src="${this.logo}" alt="logo" />
        <span>${this.title}</span>
      </header>
    `;
  }
}

customElements.define("app-header", AppHeader);

import { LitElement, html, css } from 'lit';
import "/src/components/etiqueta-texto.js";
import "/src/components/avatar-circular.js";

export class CardInfoTutor extends LitElement {
  static properties = {
    avatar_content: { type: String },
    teacher_name: { type: String },
    session_info: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.avatar_content = '';
    this.teacher_name = '';
    this.session_info = '';
  }

  static styles = css`
    :host {
      display: block;
    }

    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px;
      gap: 13px;
      border: 1px solid var(--border-gray);
      border-radius: 20px 20px 0 0;
      background-color: var(--superficie-100);
    }

    #perfil {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap:20px;
    }

    #info-perfil {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  render() {
    return html`
      <div id="container">
        <etiqueta-texto size="grande">¿Qué tal tu sesión?</etiqueta-texto>
        <div id="perfil">
          <avatar-circular>${this.avatar_content}</avatar-circular>
          <div id="info-perfil">
            <etiqueta-texto><b>${this.teacher_name}</b></etiqueta-texto>
            <etiqueta-texto size="chico">${this.session_info}</etiqueta-texto>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('card-info-tutor', CardInfoTutor);

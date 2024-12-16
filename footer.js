class FooterComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        footer {
          background-color: #222;
          color: #fff;
          text-align: center;
          padding: 1em;
          position: fixed;
          width: 100%;
          bottom: 0;
        }
      </style>
      <footer>
        <p>&copy; 2024 Derechos Reservados - Eduardo Cantuña</p>
      </footer>
    `;
  }
}

customElements.define('app-footer', FooterComponent);

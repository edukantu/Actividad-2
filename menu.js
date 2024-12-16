class MenuComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        nav {
          background-color: #333;
          color: white;
          padding: 1em;
          display: flex;
          gap: 1em;
        }
        a {
          color: white;
          text-decoration: none;
        }
      </style>
      <nav>
        <a href="#" id="home">Inicio</a>
        <a href="#" id="profile">Perfil</a>
        <a href="#" id="gallery">Galería</a>
        <a href="#" id="table">Tabla</a>
      </nav>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.id;
        const event = new CustomEvent('navigate', { detail: { page } });
        window.dispatchEvent(event);
      });
    });
  }
}

customElements.define('app-menu', MenuComponent);

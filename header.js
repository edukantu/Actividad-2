class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    // Template para el contenido del header
    shadow.innerHTML = `
      <style>
        header {
          display: flex;
          justify-content: center; /* Centra el contenido horizontalmente */
          align-items: center; /* Centra el contenido verticalmente */
          background-color:rgb(150, 151, 70);
          color: white;
          padding: 1em;
          position: relative; /* Necesario para posicionar el escudo en la derecha */
        }

        /* Estilo para el título */
        h1 {
          margin: 0;
          text-align: center; /* Asegura que el texto esté centrado */
        }

        /* Estilo para la imagen del escudo */
        #header-image {
          position: absolute; /* Posiciona la imagen de manera absoluta */
          right: 20px; /* 20px desde la derecha */
          width: 60px; /* Tamaño de la imagen */
          height: auto; /* Mantiene la relación de aspecto */
        }
      </style>
      <header>
        <h1>Bienvenido a la Red Social de la ESPE</h1>
        <img id="header-image" src="https://images.theconversation.com/institutions/4762/logos/logo-1594804163.jpeg?ixlib=rb-1.1.0&q=45&auto=format&w=170&h=170" alt="Logo ESPE">
      </header>
    `;
  }
}

customElements.define('app-header', HeaderComponent);

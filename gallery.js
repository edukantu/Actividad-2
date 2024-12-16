class UsersGallerySlots extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });

    // Contenedor principal de la galería
    this.galleryContainer = document.createElement("div");
    this.galleryContainer.classList.add('gallery-container');

    // Estilos de la galería
    this.styleContainer = document.createElement("style");
    this.styleContainer.textContent = `
      /* Estilo general */
      body {
          margin: 0;
          padding: 0;
          height: 100vh;
          background: linear-gradient(135deg, #6e7dff, #00c6ff);
          font-family: Arial, sans-serif;
      }

      /* Contenedor de la galería */
      .gallery-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          padding: 20px;
      }

      /* Estilo de las tarjetas */
      .user-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          transition: transform 0.3s ease-in-out;
          background-color: #fff;
      }

      .user-card:hover {
          transform: scale(1.05);
      }

      .user-card img {
          width: 150px;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 10px;
      }

      .user-card h3 {
          margin: 0;
          font-size: 18px;
      }

      .user-card p {
          margin: 5px 0;
          color: #666;
      }
    `;

    // Plantilla de una tarjeta
    this.template = document.createElement('template');
    this.template.innerHTML = `
      <div class="user-card">
          <img src="" alt="Imagen">
          <h3>Título</h3>
          <p>Descripción</p>
      </div>
    `;

    // Añadir los estilos y el contenedor de la galería al Shadow DOM
    this.shadow.appendChild(this.styleContainer);
    this.shadow.appendChild(this.galleryContainer);
  }

  connectedCallback() {
    // Datos locales de la galería
    const galleryData = [
      {
        title: "Silvana Paredes",
        description: "Esposa",
        image: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.6435-9/71402458_1304608703054382_4280808798869782528_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5bbf69&_nc_eui2=AeG6eQAtObCej27TaBT2o1DybA5NhA745f5sDk2EDvjl_qmzYOI69UhjesZCVQ6bC7EGIMapfmuXDPNUOGyRMJFm&_nc_ohc=Rbqa5orYRHIQ7kNvgHZq4e3&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=ALbFJnshiPu4enC2UhFrrSG&oh=00_AYBe3p5jmxPrgE7621Hysrj8XAJ2IFMVREwDyI7Q51Wd3Q&oe=67872659"
      },
      {
        title: "Joshua Cantuña",
        description: "Hijo",
        image: "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/460556411_2722971431218095_3539652678178561934_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHfmRcslS7BZaST8-6Dr95Z1CS1ZA2prhfUJLVkDamuF-m0CjhOZLAhZZn0o-m9uzKjLpG2-4s7sW1iQfi4m9q2&_nc_ohc=IfyHn6hrg-wQ7kNvgHo73D6&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AGykJaPWcEZM89SiJdps04o&oh=00_AYDbscqohSlE1-OCDwM74JoIx9uIRC4qvzZH21tNBcxZMA&oe=6765912C"
      },
      {
        title: "Emiliano Cantuña",
        description: "Hijo",
        image: "https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/448457918_2640770996104806_2646297105768507842_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGL_OUvMg6Ln5tf_jSAIxa7lTCHXcoKQOeVMIddygpA5yhhxyWt4lL911OzI-3aHxOvOrY4tfMzHd_liSZBL3VR&_nc_ohc=QY0QbdWgrZkQ7kNvgG2qQGw&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AZaQ2c__8CV-AAXlU2DYQMG&oh=00_AYDrYDg37XEdTJHYzvTCmiRSONfk9sS8TrQJB9xwj3NKLg&oe=6765872A"
      },
      {
        title: "Sobrinos",
        description: "Familia",
        image: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.6435-9/142479732_1733232373525344_6099410224286338163_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF7lDGgwZ3YcgQbmna5rBN8-JJF7mt8vzP4kkXua3y_M-p4ksz2hH2S2gdB7U2QgP3LGq2aeXvslGM-dO6Cd0_x&_nc_ohc=Ly1rQ_TBPXEQ7kNvgHVlN9V&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AOovS8sjF05KKWdBJ2ml2BF&oh=00_AYALwmVMx_bzOQFhz9mXDmKz33Gji_yuZnKV5oqnjZoTHQ&oe=67873054"
      },
      {
        title: "Viajes",
        description: "Familia",
        image: "https://scontent.fuio5-1.fna.fbcdn.net/v/t1.6435-9/117379315_1589464964568753_3140263325441633378_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGYRndmwuoIxRr46mE07abNcEEEmADCMVlwQQSYAMIxWSCK3iASrXpm5jbEbODit4KqCFK1CB-mvdHqN-SG15zc&_nc_ohc=Js47s6AZ6bwQ7kNvgGOQkIJ&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AibGeTLPf0E5CL8W0mUp3-w&oh=00_AYBbA2sSoXhqBWnQ2virFQHNctnxKWzYw8wkwvRpEuj3Cw&oe=678736E8"
      }
    ];

    // Renderizar la galería con los datos locales
    this.render(galleryData);
  }

  render = (items) => {
    this.galleryContainer.innerHTML = ""; // Limpiar la galería

    items.forEach(item => {
      const card = this.template.content.cloneNode(true);
      const image = card.querySelector('img');
      const title = card.querySelector('h3');
      const description = card.querySelector('p');

      // Asignar datos a la tarjeta
      image.src = item.image;
      image.alt = item.title;
      title.textContent = item.title;
      description.textContent = item.description;

      // Añadir la tarjeta al contenedor de la galería
      this.galleryContainer.appendChild(card);
    });
  }
}

// Registrar el componente
window.customElements.define('gallery-slots', UsersGallerySlots);

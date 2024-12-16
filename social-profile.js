class SocialProfileComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        section {
          padding: 1em;
          font-family: Arial, sans-serif;
          background-color:rgba(206, 172, 59, 0.88);
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          max-width: 300px;
          margin: 20px auto;
        }
        h2 {
          text-align: center;
          color: #333;
        }
        .profile-info {
          margin-top: 10px;
        }
        .profile-info p {
          font-size: 1em;
          margin: 5px 0;
        }
        .avatar {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          margin: 0 auto;
          display: block;
        }
      </style>
      <section>
        <h2>Perfil de Usuario</h2>
        <img class="avatar" src="https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/438082371_2600987646749808_838315004429350621_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFwOwLhhCwko8nDrH5F1pEy31sLM7qk-UHfWwszuqT5QWcSPMTl5k_GnWkWe3mOTB0D6ZXWHd8aytEufZO4kUdI&_nc_ohc=sw8E3ZUQ-0UQ7kNvgHNQVSv&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=AVn050NyzYEBpCOh2EDPlrZ&oh=00_AYDPXa5hPDeFny6HY0tdlc4MbCCrbn0FcQ0Codxc21jYig&oe=6765709E" alt="Avatar de Eduardo Cantuña">
        <div class="profile-info">
          <p><strong>Nombre:</strong> Eduardo Cantuña</p>
          <p><strong>Cargo:</strong> Ingeniero en Tecnologías de la Información</p>
          <p><strong>Amigos:</strong> 233</p>
          <p><strong>Publicaciones:</strong> 350</p>
          <p><strong>País:</strong> Ecuador</p>
          <p><strong>Ciudad:</strong> Quito</p>
          <p><strong>Estado Civil:</strong> Casado</p>
          <p><strong>Edad:</strong> 35 años</p>
        </div>
      </section>
    `;
  }
}

customElements.define('social-profile', SocialProfileComponent);

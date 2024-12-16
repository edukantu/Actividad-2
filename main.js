class MainComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        main {
          padding: 2em;
          min-height: 80vh;
        }
      </style>
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('app-main', MainComponent);

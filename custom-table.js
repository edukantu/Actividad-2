class CustomTableComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    // JSON proporcionado con los datos de la tabla
    const data = [
      {"type":"header","version":"5.2.1","comment":"Export to JSON plugin for PHPMyAdmin"},
      {"type":"database","name":"aeropuerto"},
      {"type":"table","name":"aeropuertos","database":"aeropuerto","data":
        [
          {"id_aero":"3","nombre_aero":"Eduardo","ciudad_aero":"Quito","capacidad_aero":"400","organizacion_aero":"ESPE"},
          {"id_aero":"6","nombre_aero":"San Antonio","ciudad_aero":"Cali","capacidad_aero":"1000","organizacion_aero":"ColomboTours"}
        ]
      }
    ];

    // Extraemos los datos de los aeropuertos
    const airports = data[2].data;

    // Generar las filas de la tabla con los datos
    const rows = airports.map(airport => `
      <tr>
        <td>${airport.id_aero}</td>
        <td>${airport.nombre_aero}</td>
        <td>${airport.ciudad_aero}</td>
        <td>${airport.capacidad_aero}</td>
        <td>${airport.organizacion_aero}</td>
      </tr>
    `).join('');

    // Renderizar la tabla
    this.shadowRoot.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Capacidad</th>
            <th>Organización</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  }
}

customElements.define('custom-table', CustomTableComponent);

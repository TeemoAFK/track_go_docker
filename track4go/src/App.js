import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function App() {

  const dataUsuarios = [
    { id: 1, nombre: "Oscar Mateo Peñaherrera Saltos", cedula: "1726082983", telefono: "0999496113", correo: "mateo_penaherrera@yahoo.com" }
  ];

  const [data, setData] = useState(dataUsuarios);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: '',
    nombre: '',
    cedula: '',
    telefono: '',
    correo: ''
  });


  const seleccionarUsuario = (elemento, caso) => {
    setUsuarioSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = data;
    dataNueva.map(usuario => {
      if (usuario.id === usuarioSeleccionado.id) {
        usuario.nombre = usuarioSeleccionado.nombre;
        usuario.cedula = usuarioSeleccionado.cedula;
        usuario.telefono = usuarioSeleccionado.telefono;
        usuario.correo = usuarioSeleccionado.correo;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar = () => {
    setData(data.filter(usuario => usuario.id !== usuarioSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar = () => {
    setUsuarioSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
    var valorInsertar = usuarioSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  ///return app

  return (
    <div className="App"> 
    <center>
      <h2>Lista de Usuarios Track4Go</h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Nuevo Usuario</button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Cedula</th>
            <th>Telefono</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.cedula}</td>
              <td>{elemento.telefono}</td>
              <td>{elemento.correo}</td>
              <td><button className="btn btn-primary" onClick={() => seleccionarUsuario(elemento, 'Editar')}>Editar</button>{"  "}
                <button className="btn btn-danger" onClick={() => seleccionarUsuario(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h2>Editar Usuario</h2>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={usuarioSeleccionado && usuarioSeleccionado.id}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={usuarioSeleccionado && usuarioSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Cedula</label>
            <input
              className="form-control"
              type="text"
              name="cedula"
              value={usuarioSeleccionado && usuarioSeleccionado.cedula}
              onChange={handleChange}
            />
            <br />
            <br />

            <label>Telefono</label>
            <input
              className="form-control"
              type="text"
              name="telefono"
              value={usuarioSeleccionado && usuarioSeleccionado.telefono}
              onChange={handleChange}
            />
            <br />

            <label>Correo</label>
            <input
              className="form-control"
              type="text"
              name="correo"
              value={usuarioSeleccionado && usuarioSeleccionado.correo}
              onChange={handleChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el usuario {usuarioSeleccionado && usuarioSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={()=>eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={()=>setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h2>Crear Usuario</h2>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={usuarioSeleccionado && usuarioSeleccionado.id}
            />
            <br />

            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={usuarioSeleccionado && usuarioSeleccionado.nombre}
              onChange={handleChange}
            />
            <br />

            <label>Cedula</label>
            <input
              className="form-control"
              type="text"
              name="cedula"
              value={usuarioSeleccionado && usuarioSeleccionado.cedula}
              onChange={handleChange}
            />
            <br />
            <br />

            <label>Telefono</label>
            <input
              className="form-control"
              type="text"
              name="telefono"
              value={usuarioSeleccionado && usuarioSeleccionado.telefono}
              onChange={handleChange}
            />
            <br />

            <label>Correo</label>
            <input
              className="form-control"
              type="text"
              name="correo"
              value={usuarioSeleccionado && usuarioSeleccionado.correo}
              onChange={handleChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      </center>
    </div>
  )
}
export default App;
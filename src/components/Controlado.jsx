import { useState } from "react";

const Controlado = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: true,
  });

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description, state);
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    //console.log(value)
    //console.log(name)

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
        value={description}
        onChange={handleChange}
      />

      <div className="form-check mb-2">
        <input
          type="checkbox"
          name="priority"
          className="form-check-input"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Dar Prioridad</label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
    </form>
  );
};

export default Controlado;

import { useState } from "react";
import { useRef } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const data = new FormData(form.current);
    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);

    if (!title.trim() || !description.trim() || !state.trim())
      return setError("Llena todos los campos");

    console.log(title, description, state);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese TO DO"
        className="form-control mb-2"
        name="title"
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripción"
        name="description"
      />

      <select className="form-select mb-2" name="state">
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error !== "" && error}
    </form>
  );
};

export default NoControlado;

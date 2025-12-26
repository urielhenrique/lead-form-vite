import { useState } from "react";

function App() {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    status: "novo",
  });

  function handleChange(e) {
    setLead({
      ...lead,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Lead enviado:", lead);
    alert("Lead enviado com sucesso!");
  }

  return (
    <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Contato</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Nome"
          value={lead.name}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={lead.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Telefone / WhatsApp"
          value={lead.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Descreva seu caso"
          value={lead.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;

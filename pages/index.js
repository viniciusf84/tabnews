import { useState } from "react";

function Home() {
  const [message, setMessage] = useState("");

  const addMesage = () => {
    setMessage((prevState) => (prevState ? `${prevState} tanto` : "Te amo"));
  };

  const divStyle = {
    background: "#b5ff33",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  };

  return (
    <div style={divStyle}>
      <h1>Oi, neguinha!</h1>

      <button onClick={addMesage}>Clique aqui</button>

      <p>{message}</p>
    </div>
  );
}

export default Home;

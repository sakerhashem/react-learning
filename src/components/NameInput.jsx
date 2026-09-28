import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <label>
        Naam:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Hallo {name}!</p>
    </div>
  );
}

export default NameInput;
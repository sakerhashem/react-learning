import { useState } from 'react';

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <p>Status: {isOn ? "Aan" : "Uit"}</p>
      <button onClick={() => setIsOn(!isOn)}>
        Zet {isOn ? "uit" : "aan"}
      </button>
    </div>
  );
}

export default Toggle;
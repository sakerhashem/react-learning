import useToggle from '../hooks/useToggle';

function Toggle() {
  const { value, toggle } = useToggle();   

  return (
    <div>
      <p>{value ? "AAN" : "UIT"}</p>
      <button onClick={toggle}>Schakel om</button>
    </div>
  );
}

export default Toggle;

// const [isOn, setIsOn] = useState(false);
// <p>Status: {isOn ? "Aan" : "Uit"}</p>
//    <button onClick={() => setIsOn(!isOn)}>
//      Zet {isOn ? "uit" : "aan"}
//    </button>

// const { value, toggle } = useToggle();        Start op false
// const { value, toggle } = useToggle(true);    Start op true
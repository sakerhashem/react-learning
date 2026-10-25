import useCounter from "../hooks/useCounter";

function Counter() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <p>Teller: {count}</p>
      <button onClick={increment}>
        +1
      </button>
      <button onClick={decrement}>
        -1
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
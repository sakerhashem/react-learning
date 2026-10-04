import { useEffect, useRef, useState } from "react";

function FocusInput() {
    const inputRef = useRef(null);
    const [count, setCount] = useState(0);
    const previousCount = useRef(0);    // ref voor de vorige waarde

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    // sla de huidige waarde op in de ref na elke render
    useEffect(() => {
        previousCount.current = count;
    }, [count]);      // voer dit uit wanneer count verandert

    return (
        <div>
            <input
                type="text"
                ref={inputRef}
            />
            <button onClick={focusInput}>Focus</button>

            <p>Current: {count}</p> 
            <p>Previous: {previousCount.current}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default FocusInput;
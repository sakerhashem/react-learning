import { useRef, useState } from "react";

function RenderCounter() {
    const [count, setCount] = useState(0);
    const renderCount = useRef(0);

    renderCount.current += 1;
    
    return (
        <div>
            <p>Count: {count}</p>
            <p>Renders: {renderCount.current}</p>

            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    );
}

export default RenderCounter;
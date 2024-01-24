import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);


    return (
        <div>
            <p className="counter">{count}</p>
            <button onClick={() => setCount(precount => precount - 1)}>Decrease</button>
            <button onClick={() => setCount(precount => precount + 1)}>Increase</button>
        </div>
    )
}

export default Counter;
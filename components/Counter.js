"use client"

import { useState } from "react"

function Counter(props) {
    const [count, setCount] = useState(0)

    return <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200">
        <h2>{props.title}</h2>
        <div className="flex items-center gap-4">
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
}

export default Counter
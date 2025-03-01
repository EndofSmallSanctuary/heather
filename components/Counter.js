"use client"

import { useState } from "react"

function Counter({ title, id }) {
    const [count, setCount] = useState(0)
    const [loading, setLoading] = useState(false)

    async function handleCounterAction(action) {
        setLoading(true)
        try {
            const response = await fetch("/api/counter", {
                credentials: "include",
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action: action,
                    counterId: id,
                })
            })
            if (!response.ok) throw new Error("Failed to update counter")

            setCount((prevCount) => (action === "increment" ? prevCount + 1 : prevCount - 1))
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return <div className="flex flex-col items-center gap-4 p-6 rounded-lg border border-gray-200">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="flex items-center gap-4">
            <button
                className="btn btn-circle"
                onClick={() => handleCounterAction("decrement")}
                disabled={loading}
            >-</button>
            <span>{count}</span>
            <button
                className="btn btn-circle"
                onClick={() => handleCounterAction("increment")}
                disabled={loading}
            >+</button>
        </div>
    </div>
}

export default Counter
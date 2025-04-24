import { useEffect, useState } from "react"

type Config = {
    deps: React.DependencyList
}

export const use = <T>(f: Promise<T> | (() => Promise<T>), config: Config = { deps: [] }): T | null => {
    const [data, setData] = useState<T | null>(null)
    useEffect(() => {
        if (config.deps.every(Boolean)) {
            (f instanceof Promise ? f : f())
            .then(setData)
        }
    }, config.deps)
    return data
}
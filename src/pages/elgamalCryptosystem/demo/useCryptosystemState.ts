import { elgamalCryptosystemApi } from "@shared/api/elgamalCryptosystem"
import { ElgamalCryptosistem } from "@shared/api/elgamalCryptosystem/types"
import { debounce } from "@shared/utils/debounce"
import { useEffect, useState, useRef } from "react"

export const useCryptosystemState = () => {
    const [state, setState] = useState<ElgamalCryptosistem | null>(null)

    const debouncedApiRequestRef = useRef(
        debounce(() => {
            elgamalCryptosystemApi
                .getElgamalCryptosistemDemo()
                .then(setState)
        }, 300)
    )

    useEffect(() => {
        debouncedApiRequestRef.current?.()
    }, [])

    return {
        demoState: state,
    }
}

export type BackdoorState = ReturnType<typeof useCryptosystemState>
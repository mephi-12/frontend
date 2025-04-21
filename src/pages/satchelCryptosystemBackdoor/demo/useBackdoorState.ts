import { satchelCryptosystemBackdoorDemoApi } from "@shared/api/satchelCryprosystemBackdoor"
import { SatchelCryprosystemBackdoor } from "@shared/api/satchelCryprosystemBackdoor/types"
import { debounce } from "@shared/utils/debounce"
import { useEffect, useState, useRef } from "react"

export const useBackdoorState = () => {
    const [state, setState] = useState<SatchelCryprosystemBackdoor | null>(null)

    const debouncedApiRequestRef = useRef(
        debounce(() => {
            satchelCryptosystemBackdoorDemoApi
                .getSatchelCryptosystemBackdoorDemo()
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

export type BackdoorState = ReturnType<typeof useBackdoorState>
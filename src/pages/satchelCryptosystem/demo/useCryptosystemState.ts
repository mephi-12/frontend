import { satchelCryprosystemApi } from "@shared/api/satchelCryprosystem"
import {
    EncodingDigitType,
    GetSatchelCryprosystemParams,
    SatchelCryprosystem,
    SatchelCryptosystemType
} from "@shared/api/satchelCryprosystem/types"
import { debounce } from "@shared/utils/debounce"
import { useEffect, useState, useRef } from "react"

export const useCryptosystemState = () => {
    const [state, setState] = useState<SatchelCryprosystem | null>(null)
    const [options, setOptions] = useState<GetSatchelCryprosystemParams>({
        type: SatchelCryptosystemType.SIS,
        encoding_digit: EncodingDigitType.LOW,
        encoding_power: '3'
    })

    const debouncedApiRequestRef = useRef(
        debounce((opts: GetSatchelCryprosystemParams) => {
            satchelCryprosystemApi
                .getSatchelCryptosystemDemo(opts)
                .then(setState)
        }, 300)
    )

    useEffect(() => {
        debouncedApiRequestRef.current?.(options)
    }, [options])

    return {
        demoState: state,
        demoOptions: {
            ...options,
            setOptions
        }
    }
}

export type CryptosystemState = ReturnType<typeof useCryptosystemState>
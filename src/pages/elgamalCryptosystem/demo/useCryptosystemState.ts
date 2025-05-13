import { elgamalCryptosystemApi } from "@shared/api/elgamalCryptosystem"
import { ElgamalCryptosistem } from "@shared/api/elgamalCryptosystem/types"
import { debounce } from "@shared/utils/debounce"
import { useEffect, useState, useRef } from "react"

export const useCryptosystemState = () => {
    const [state, setState] = useState<ElgamalCryptosistem | null>(null)
    const [bitLength, setBitLength] = useState(10)

    const debouncedApiRequest =
        debounce(() => {
            elgamalCryptosystemApi
                .getElgamalCryptosistemDemo(bitLength)
                .then(setState)
        }, 1000)

    useEffect(() => {
        debouncedApiRequest()
    }, [bitLength])

    return {
        demoState: state,
        bitLength,
        setBitLength
    }
}

export type BackdoorState = ReturnType<typeof useCryptosystemState>
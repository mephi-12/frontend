import { Entity } from "@shared/types/Entity";

export type ElgamalCryptosistemBase = {
    prime: string
    generator: string
    secretKey: string
    publicKey: string
    k: string
    ciphertext: {c1: string; c2: string}
    s: string
    decoded_message: string
}

export type ElgamalCryptosistem = Entity & Partial<ElgamalCryptosistemBase>

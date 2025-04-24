import { Entity } from "@shared/types/Entity"
import { TaskStatus } from "@shared/types/Task"

export type ElgamalCryptosistemBase = {
    prime: string
    generator: string
    secretKey: string
    publicKey: string
    k: string
    ciphertext: {
        c1: string
        c2: string
    }
    s: string
    decoded_message: string
}

export type ElgamalCryptosistem = Entity & Partial<ElgamalCryptosistemBase>

export type ElgamalCryptosistemTask = {
    data: Partial<ElgamalCryptosistemBase>
    status: TaskStatus
} & Entity

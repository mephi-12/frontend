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

export type ElgamalCryptosistem = Partial<ElgamalCryptosistemBase>

export type ElgamalCryptosistemTask = {
    data: Partial<ElgamalCryptosistemBase>
    status: TaskStatus
} & Entity

export type ElgamalCryptosistemDemoResponse = {
    p: bigint
    g: bigint
    x: bigint
    m: bigint
    y: bigint
    k: bigint
    c1: bigint
    yk: bigint
    c2: bigint
    s: bigint
    decryptedMessage: bigint
    sinverse: bigint
}
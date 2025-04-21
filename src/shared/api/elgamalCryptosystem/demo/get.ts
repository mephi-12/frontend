import { ElgamalCryptosistem } from "../types";

export const mock: ElgamalCryptosistem = {
    id: '4',
    createdAt: new Date().toISOString(),
    prime: "23",
    generator: "5",
    secretKey: "13",
    publicKey: "21",
    k: "7",
    ciphertext: {
        c1: "17",
        c2: "12"
    },
    s: '11',
    decoded_message: "15",
}

export const getElgamalCryptosistemDemo = (): Promise<ElgamalCryptosistem> => {
    "NOT IMPLEMENTED"
    return Promise.resolve(mock)
}
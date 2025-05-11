import { ElgamalCryptosistemBase, ElgamalCryptosistemDemoResponse } from "../types";

export const mapResponse = (data: ElgamalCryptosistemDemoResponse): ElgamalCryptosistemBase => {
    return ({
        prime: String(data.p),
        generator: String(data.g),
        secretKey: String(data.x),
        publicKey: String(data.y),
        ciphertext: {
            c1: String(data.c1),
            c2: String(data.c2)
        },
        k: String(data.k),
        s: String(data.s),
        decoded_message: String(data.decryptedMessage),
    })
}
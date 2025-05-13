import { http } from "@shared/api/instance"
import { ElgamalCryptosistem, ElgamalCryptosistemServerResponse } from "../types"
import { mapResponse } from "./map"
import { message } from "antd"

export const mock: ElgamalCryptosistem = {
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

export const getElgamalCryptosistemDemo = async (): Promise<ElgamalCryptosistem> => {
    try {
        const demo = await http.get<ElgamalCryptosistemServerResponse>('/tasks/eigamal/editorial?bitLength=100')
        return mapResponse(demo.data)
    } catch (error) {
        void message.error('Не удалось получить сложный пример с сервера, посмотрите простой, пока мы чиним ошибку :)')
        return Promise.resolve(mock)
    }
}

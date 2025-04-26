import { http } from "@shared/api/instance"
import { EncodingDigitType, GetSatchelCryprosystemParams, SatchelCryprosystem, SatchelCryptosystemType } from "../types"
import { map, mapParams } from "./map"
import { message } from "antd"

const mock: SatchelCryprosystem = {
    state: '59',
    omega: '41',
    module: '2418',
    type: SatchelCryptosystemType.POWER,
    encoding_power: '2',
    encoding_digit: EncodingDigitType.LOW,
    encoded_message: '3653',
    decoded_message: '10011',
    lightBackpack: ['201', '502', '304', '108', '016'],
    heavyBackpack: ['987', '1238', '374', '2010', '656']
}

export const getSatchelCryptosystemDemo = async (params: GetSatchelCryprosystemParams): Promise<SatchelCryprosystem> => {
    try {
        const response = await http.get('/tasks/backpack/editorial', { params: mapParams(params)})
        return map(response.data)
    } catch (error) {
        void message.error('Не удалось получить сложный пример с сервера, посмотрите простой, пока мы чиним ошибку :)')
        return mock
    }
}

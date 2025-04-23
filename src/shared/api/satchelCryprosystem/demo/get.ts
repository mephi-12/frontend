import { EncodingDigitType, GetSatchelCryprosystemParams, SatchelCryprosystem, SatchelCryptosystemType } from "../types"

const mockPOWER2: SatchelCryprosystem = {
    id: '0',
    createdAt: new Date().toISOString(),
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

// const mockSIS: SatchelCryprosystem = {
//     id: '1',
//     createdAt: new Date().toISOString(),
//     state: '103',
//     omega: '7',
//     module: '721',
//     type: SatchelCryptosystemType.SIS,
//     lightBackpack: ['3', '5', '11', '24', '50'],
//     heavyBackpack: ['21', '35', '77', '168', '350'],
//     decoded_message: '11010',
//     encoded_message: '1683',
// }


export const getSatchelCryptosystemDemo = (params: GetSatchelCryprosystemParams): Promise<SatchelCryprosystem> => {
    "NOT IMPLEMENTED"
    return Promise.resolve(mockPOWER2)
}

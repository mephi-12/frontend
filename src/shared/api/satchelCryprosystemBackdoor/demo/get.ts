import { SatchelCryprosystemBackdoor } from "../types"

const mock: SatchelCryprosystemBackdoor = {
    id: '0',
    createdAt: new Date().toISOString(),
    attackerKey: {
        module: '77',
        omega: '43',
        state: '7'
    },
    keys: {  
        omega: '47',
        state: '73',
        module: '3430'
    },
    magicNumber: {
        omega: '75',
        state: '17'
    },
    lightBackpack: ['0109', '0202', '0407', '0808', '1605'],
    heavyBackpack: ['1505', '2587', '1697', '0011', '3405'],
    decoded_message: '10011',
    encoded_message: '4921',
    decoded_message_ten: '25',
    decoded_message_ten_full: '2513'
}

export const getSatchelCryptosystemBackdoorDemo = (): Promise<SatchelCryprosystemBackdoor> => {
    "NOT IMPLEMENTED"
    return Promise.resolve(mock)
}

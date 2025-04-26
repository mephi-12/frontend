import { EncodingDigitType, GetSatchelCryprosystemParams, SatchelCryprosystem, SatchelCryptosystemType } from "../types"

export type DTO = {
    power: number
    type: 'CODE_SUPER_INCREASING' | 'CODE_DEGREES',
    message: boolean[],
    lightBackpack: bigint[],
    omega: bigint,
    hardBackpack: bigint[],
    encodedMessage: bigint,
    module: bigint,
    reverseOmega: bigint
}


const satchelCryprosystemType = {
    'CODE_DEGREES': SatchelCryptosystemType.POWER,
    'CODE_SUPER_INCREASING': SatchelCryptosystemType.SIS,
    [SatchelCryptosystemType.POWER]: 'CODE_DEGREES',
    [SatchelCryptosystemType.SIS]: 'CODE_SUPER_INCREASING'
} as const

export const map = ({
    type,
    lightBackpack,
    hardBackpack,
    reverseOmega,
    omega,
    module,
    message,
    encodedMessage,
    power
}: DTO): SatchelCryprosystem => ({
    type: satchelCryprosystemType[type],
    lightBackpack: lightBackpack.map(String),
    heavyBackpack: hardBackpack.map(String),
    state: reverseOmega?.toString(),
    omega: omega?.toString(),
    module: module?.toString(),
    decoded_message: message.map(Number).join(''),
    encoded_message: encodedMessage?.toString(),
    encoding_power: power?.toString(),
    encoding_digit: EncodingDigitType.LOW
})


export const mapParams = (params: GetSatchelCryprosystemParams) => ({
    ...params,
    type: satchelCryprosystemType[params.type]
})
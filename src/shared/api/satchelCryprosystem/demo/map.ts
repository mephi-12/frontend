import { EncodingDigitType, GetSatchelCryprosystemParams, SatchelCryprosystem, SatchelCryprosystemServerResponse, SatchelCryptosystemType } from "../types"


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
}: SatchelCryprosystemServerResponse): SatchelCryprosystem => ({
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
    digit: Number(params.encoding_digit) || undefined,
    power: Number(params.encoding_power) || undefined,
    type: satchelCryprosystemType[params.type]
})
import { Entity } from "@shared/types/Entity"
import { TaskStatus } from "@shared/types/Task"

export enum SatchelCryptosystemType {
    POWER = 'POWER',
    SIS = 'SIS'
}

export enum EncodingDigitType {
    MIDDLE = 'MIDDLE',
    HIGH = 'HIGH',
    LOW = 'LOW'
}

export type SatchelCryprosystemPowerBase = {
    type: SatchelCryptosystemType
    lightBackpack: string[]
    heavyBackpack: string[]
    state: string // S
    omega: string // R
    module: string // T
    decoded_message: string
    encoded_message: string
}

export type SatchelCryprosystemPower = {
    type: SatchelCryptosystemType.POWER
    encoding_power: string
    encoding_digit: EncodingDigitType
} & SatchelCryprosystemPowerBase

export type SatchelCryprosystemSIS = {
    type: SatchelCryptosystemType.SIS
} & SatchelCryprosystemPowerBase

export type SatchelCryprosystem = Partial<SatchelCryprosystemPower | SatchelCryprosystemSIS>

export type GetSatchelCryprosystemParams = {
    encoding_power?: string // for Power type
    encoding_digit?: EncodingDigitType // for Power type
    type: SatchelCryptosystemType
}

export type SatchelCryprosystemTask = {
    data: Partial<SatchelCryprosystemPower | SatchelCryprosystemSIS>
    status: TaskStatus
} & Entity

export type SatchelCryprosystemServerResponse = {
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


export enum Unit {
    'satchel_cryptosystem' = 'satchel_cryptosystem',
    'satchel_cryptosystem_backdoor' = 'satchel_cryptosystem_backdoor',
    'elgamal_cryptosystem' = 'elgamal_cryptosystem'
}

export type UnitName = keyof typeof Unit

export type UnitConfig = {
    name: UnitName
    title: string
    author: string
}
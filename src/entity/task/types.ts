export type ServerProblem = {
    id: string
    createdAt: string
    state: string
    power: bigint | null,
    type: string
    message: boolean[]
    lightBackpack: bigint[]
    omega: bigint | null
}

export type Problem = {
    id: string
    R: string | null
    lightBackpack: string[]
    label: string
    message: string
    power: string | null
}

export type Solve = {
    id: string
    power: number
    type: string
    message: boolean[]
    lightBackpack: number[]
    omega: number
    hardBackpack: number[]
    encodedMessage: number
    decodedMessage: boolean[]
    module: number
    reverseOmega: number
}

export type SolveResponse = {
    id: string
    createdAt: string
    state: string
    power: bigint
    type: string
    message: boolean[]
    lightBackpack: bigint[]
    omega: bigint
    hardBackpack: bigint[]
    encodedMessage: bigint
    decodedMessage: boolean[]
    module: bigint
    reverseOmega: bigint
    errorDescription: string
}

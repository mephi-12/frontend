import { Task, TaskStatus } from "@shared/types/Task";
import { ElgamalCryptosistemBase, ElgamalCryptosistemServerResponse, ElgamalCryptosistemTask } from "../elgamalCryptosystem/types";
import { EncodingDigitType, SatchelCryprosystem, SatchelCryprosystemServerResponse, SatchelCryprosystemTask, SatchelCryptosystemType } from "../satchelCryprosystem/types";
import { Challenge, ChallengeServerResponse } from "./types";
import { jsonParser } from "@shared/utils/jsonParser";

// TODO избавиться от дублирования

export const mapElgamal = (data: ElgamalCryptosistemServerResponse): ElgamalCryptosistemBase => {
    return ({
        prime: String(data.p) || null,
        generator: String(data.g) || null,
        secretKey: String(data.x) || null,
        publicKey: String(data.y) || null,
        ciphertext: {
            c1: String(data.c1) || null,
            c2: String(data.c2) || null
        },
        k: String(data.k) || null,
        s: String(data.s) || null,
        decoded_message: String(data.decryptedMessage) || null,
    })
}

const satchelCryprosystemType = {
    'BACKPACK_CODE_DEGREES': SatchelCryptosystemType.POWER,
    'BACKPACK_CODE_SUPER_INCREASING': SatchelCryptosystemType.SIS,
    [SatchelCryptosystemType.POWER]: 'BACKPACK_CODE_DEGREES',
    [SatchelCryptosystemType.SIS]: 'BACKPACK_CODE_SUPER_INCREASING'
} as const

export const mapSatchel = ({
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
    type: satchelCryprosystemType[type] || null,
    lightBackpack: lightBackpack?.map(String) || null,
    heavyBackpack: hardBackpack?.map(String) || null,
    state: reverseOmega?.toString() || null,
    omega: omega?.toString() || null,
    module: module?.toString() || null,
    decoded_message: message?.map(Number).join('') || null,
    encoded_message: encodedMessage?.toString() || null,
    encoding_power: power?.toString() || null,
    encoding_digit: EncodingDigitType.LOW || null
})

export const mapChallenge = (data: ChallengeServerResponse): Challenge => {
    const ret: Partial<Challenge> = {}
    ret.id = data.id
    ret.name = 'Тестирование, 3 задания'
    ret.dateStart = 'Не указано'
    ret.dateEnd = 'Не указано'
    ret.tasksCount = data.problems.length
    ret.progress = data.problems.reduce((acc, task) => task.state === 'NEW' ? 0 : 1, 0)
    ret.tasks = data.problems.map((task) => {
        const mapped = {id: task.id, status: TaskStatus.IN_PROGRESS, data: undefined}
        if (task.type === 'BACKPACK') {
            mapped.data = mapSatchel(JSON.parse(task.statement, jsonParser))
        } else if (task.type === 'EL_GAMAL') {
            mapped.data = mapElgamal(JSON.parse(task.statement, jsonParser))
        }
        return mapped as Task
    })
    return ret as Challenge
}
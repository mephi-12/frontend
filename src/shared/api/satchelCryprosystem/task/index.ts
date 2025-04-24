import dayjs from "dayjs"
import { EncodingDigitType, SatchelCryprosystemTask, SatchelCryptosystemType } from "../types"
import { TaskStatus } from "@shared/types/Task"

const mock = {
    data: {
        state: null,
        omega: '41',
        module: null,
        type: SatchelCryptosystemType.POWER,
        encoding_power: '2',
        encoding_digit: null,
        encoded_message: '3653',
        decoded_message: null,
        lightBackpack: [null, '502', '304', null, '016'],
        heavyBackpack: [null, '1238', null, '2010', null]
    },
    id: '213421341234',
    createdAt: dayjs().toISOString(),
    status: TaskStatus.IN_PROGRESS
}

export const getTask = (challengeId: string): Promise<SatchelCryprosystemTask> => {
    "NOT IMPLEMENTED"
    return Promise.resolve(mock)
}

export const checkTask = (task: SatchelCryprosystemTask): Promise<{solved: boolean}> => {
    "NOT IMPLEMENTED"
    return Promise.resolve({solved: true})
}

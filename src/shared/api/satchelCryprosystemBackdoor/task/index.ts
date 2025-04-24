import dayjs from "dayjs"
import { SatchelCryprosystemBackdoorTask } from "../types"
import { TaskStatus } from "@shared/types/Task"

const mock = {
    data: {
        attackerKey: {
            module: '77',
            omega: null,
            state: '7'
        },
        keys: {  
            omega: '47',
            state: '73',
            module: null
        },
        magicNumber: {
            omega: null,
            state: '17'
        },
        lightBackpack: ['0109', null, '0407', '0808', '1605'],
        heavyBackpack: [null, null, null, null, null],
        decoded_message: '10011',
        encoded_message: '4921',
        decoded_message_ten: '25',
        decoded_message_ten_full: '2513'
    },
    id: 'weqfwefwe',
    createdAt: dayjs().toISOString(),
    status: TaskStatus.IN_PROGRESS
}

export const getTask = (challengeId: string): Promise<SatchelCryprosystemBackdoorTask> => {
    "NOT IMPLEMENTED"
    return Promise.resolve(mock)
}

export const checkTask = (task: SatchelCryprosystemBackdoorTask): Promise<{solved: boolean}> => {
    "NOT IMPLEMENTED"
    return Promise.resolve({solved: true})
}


import dayjs from "dayjs"
import { ElgamalCryptosistemTask } from "../types"
import { TaskStatus } from "@shared/types/Task"
// TODO везде в /api/**/(task|types) избавиться от дублирования
const mock = {
    data: {
        prime: "23",
        generator: "5",
        secretKey: "13",
        publicKey: "21",
        k: "7",
        ciphertext: {
            c1: "17",
            c2: "12"
        },
        s: '11',
        decoded_message: "15",
    },
    id: '23r2323',
    createdAt: dayjs().toISOString(),
    status: TaskStatus.IN_PROGRESS
}

export const getTask = (challengeId: string): Promise<ElgamalCryptosistemTask> => {
    "NOT IMPLEMENTED"
    return Promise.resolve(mock)
}

export const checkTask = (task: ElgamalCryptosistemTask): Promise<{solved: boolean}> => {
    "NOT IMPLEMENTED"
    return Promise.resolve({solved: true})
}

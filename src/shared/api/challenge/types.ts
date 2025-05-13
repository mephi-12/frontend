import { Task } from "@shared/types/Task"

export type Challenge = {
    id: string
    name: string
    dateStart: string
    dateEnd: string
    tasksCount: number
    progress: number // число решенных задач
    tasks: Task[]
}


export type ChallengeServerResponse = {
    id: string
    state: 'NEW'
    problems: {
        id: string
        statement: string
        type: "EL_GAMAL" | "BACKPACK"
        state: "NEW"
        sessionId: string
    }[]
}
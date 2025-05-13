import { http } from "../instance"
import { Challenge, ChallengeServerResponse } from "./types"
import { mapChallenge } from "./map"
import { message } from "antd"
import { getAxiosError } from "@shared/utils/getAxiosError"
import { jsonParser } from "@shared/utils/jsonParser"

export const challengeApi = {
    // my challenges only
    // getChallehges: (): Promise<Challenge[]> => {
    //     "NOT IMPLEMENTED"
    //     return Promise.resolve([
    //         {
    //             name: 'Тест для группы Б23-501',
    //             id: '232345646hewfrtgbsergghjrymut',
    //             dateStart: dayjs().toISOString(),
    //             dateEnd: dayjs().add(2, 'h').toISOString(),
    //             tasksCount: 3,
    //             progress: 0
    //         },
    //         {
    //             name: 'Тест для группы Б23-544',
    //             id: 'ryjtyj765ewaf',
    //             dateStart: dayjs().toISOString(),
    //             dateEnd: dayjs().add(2, 'h').toISOString(),
    //             tasksCount: 3,
    //             progress: 0
    //         }
    //     ])
    // },
    getChallehge: async (): Promise<Challenge> => {
        try {
            const res = await http.post<ChallengeServerResponse>('/tasks/session?configuration=Sem4')
            const mapped = mapChallenge(res.data)
            localStorage.setItem('challenge', JSON.stringify(mapped))
            return mapped
        } catch (error) {
            return JSON.parse(localStorage.getItem('challenge'), jsonParser) ||
            ({
                    id: '123456789',
                    name: 'Тест для группы Б23-501',
                    dateStart: '',
                    dateEnd: '',
                    tasksCount: 0,
                    progress: 0,
                    tasks: []
            })
        }
        // "NOT IMPLEMENTED"
        // return Promise.resolve(
        //     {
        //         id,
        //         name: 'Тест для группы Б23-501',
        //         dateStart: dayjs().toISOString(),
        //         dateEnd: dayjs().add(2, 'h').toISOString(),
        //         tasksCount: 3,
        //         progress: 2,
        //     }
        // )
    },
    submit: (id: string, data: any) =>
        http.put('/tasks/submit', data, {params: {statementId: id}})
}
import dayjs from "dayjs";
import { http } from "../instance";
import { Challenge } from "./type";

export const challengeApi = {
    // my challenges only
    getChallehges: (): Promise<Challenge[]> => {
        "NOT IMPLEMENTED"
        return Promise.resolve([
            {
                name: 'WTDFSDFWV1231231',
                id: '232345646hewfrtgbsergghjrymut',
                dateStart: dayjs().toISOString(),
                dateEnd: dayjs().add(2, 'h').toISOString(),
                tasksCount: '3'
            },
            {
                name: '54trhgbfvegrghr',
                id: 'ryjtyj765ewaf',
                dateStart: dayjs().toISOString(),
                dateEnd: dayjs().add(2, 'h').toISOString(),
                tasksCount: '3'
            }
        ])
    }
}
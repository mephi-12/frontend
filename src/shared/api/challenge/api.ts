import dayjs from "dayjs";
import { http } from "../instance";
import { Challenge } from "./types";

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
                tasksCount: 3,
                progress: 0
            },
            {
                name: '54trhgbfvegrghr',
                id: 'ryjtyj765ewaf',
                dateStart: dayjs().toISOString(),
                dateEnd: dayjs().add(2, 'h').toISOString(),
                tasksCount: 3,
                progress: 0
            }
        ])
    },
    getChallehge: (id: string): Promise<Challenge> => {
        "NOT IMPLEMENTED"
        return Promise.resolve(
            {
                id,
                name: 'WTDFSDFWV1231231',
                dateStart: dayjs().toISOString(),
                dateEnd: dayjs().add(2, 'h').toISOString(),
                tasksCount: 3,
                progress: 2,
            }
        )
    }
}
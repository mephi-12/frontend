import { http } from "../instance"

export const scoreApi = {
    tasksInfo: () => http.get('/moderator/tasks/session').then(res => res.data)
}

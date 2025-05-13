import { challengeApi } from "@shared/api/challenge"
import { Task } from "@shared/types/Task"
import { use } from "@shared/utils/use"
import { useEffect, useState } from "react"

export const useChallenge = () => {
    const challenge = use(challengeApi.getChallehge)
    const [task, setTask] = useState<Task>(null)
    useEffect(() => {
        const progress = challenge?.progress
        if (progress != undefined) {
            setTask(challenge.tasks[progress])
        }
    }, [challenge])
    return {
        challenge,
        task,
    }
}

import { challengeApi } from "@shared/api/challenge"
import { elgamalCryptosystemApi } from "@shared/api/elgamalCryptosystem"
import { satchelCryprosystemApi } from "@shared/api/satchelCryprosystem"
import { satchelCryptosystemBackdoorApi } from "@shared/api/satchelCryprosystemBackdoor"
import { Task } from "@shared/types/Task"
import { use } from "@shared/utils/use"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const taskSequence = [satchelCryprosystemApi, satchelCryptosystemBackdoorApi, elgamalCryptosystemApi] as const

const getTask = taskSequence.map((api) => api.getTask)
const checkTask = taskSequence.map((api) => api.checkTask)


export const useChallenge = () => {
    const { challengeId } = useParams()
    const challenge = use(() => challengeApi.getChallehge(challengeId))
    const [task, setTask] = useState<Task>(null)
    useEffect(() => {
        const progress = challenge?.progress
        if (progress != undefined) {
            getTask[progress % 3](challengeId).then(setTask)
        }
    }, [challenge])
    return {
        challenge,
        task,
    }
}

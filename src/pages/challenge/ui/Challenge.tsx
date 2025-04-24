import { useLog } from "@shared/utils/useLog"
import { useChallenge } from "../models/useChallenge"
import { ProgressBar } from "./ProgressBar"
import './styles.scss'
import { Task } from "@shared/types/Task"
import { isElgamalCryptosistemTask, isSatchelCryptosystemBackdoorTask, isSatchelCryptosystemTask } from "@shared/utils/taskType"
import { SC } from "./SC"
import { BSC } from "./BSC"
import { ESC } from "./ESC"

const getTask = (task: Task) => {
    if (isSatchelCryptosystemTask(task)) return <SC task={task} />
    if (isSatchelCryptosystemBackdoorTask(task)) return <BSC task={task} />
    if (isElgamalCryptosistemTask(task)) return <ESC task={task} />
}

const ChallengePage = () => {
    const {challenge, task} = useChallenge()
    useLog(challenge, task)
    return (
        <div className="challenge-container shadow">
            <div className="header">
                <h1>{challenge?.name}</h1>
                {challenge &&
                <ProgressBar
                    progress={challenge.progress}
                    total={challenge.tasksCount}
                    labels={['РК', 'Бекдор в РК', 'КС Эльгамаля']}
                />}
            </div>
            <div>
                {task && getTask(task)}
            </div>
        </div>
    )
}

export default ChallengePage

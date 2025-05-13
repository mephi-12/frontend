import { useLog } from "@shared/utils/useLog"
import { useChallenge } from "../models/useChallenge"
import { ProgressBar } from "./ProgressBar"
import './styles.scss'
import { Task } from "@shared/types/Task"
import { isElgamalCryptosistemTask, isSatchelCryptosystemBackdoorTask, isSatchelCryptosystemTask } from "@shared/utils/taskType"
import { SC } from "./SC"
import { BSC } from "./BSC"
import { ESC } from "./ESC"
import { message } from "antd"

const getTask = (task: Task) => {
    if (isElgamalCryptosistemTask(task)) return <ESC task={task} />
    if (isSatchelCryptosystemTask(task)) return <SC task={task} />
    if (isSatchelCryptosystemBackdoorTask(task)) return <BSC task={task} />
    void message.error('Не определили тип задания')
}

const ChallengePage = () => {
    const {challenge, task} = useChallenge()
    return (
        <div className="challenge-container shadow">
            <div className="header">
                <h1>{challenge?.name}</h1>
                {challenge &&
                <ProgressBar
                    progress={challenge.progress}
                    total={challenge.tasksCount}
                    labels={['КС Эльгамаля', 'РК', 'Бекдор в РК']}
                />}
            </div>
            <div className="task-container">
                {task && getTask(task)}
            </div>
        </div>
    )
}

export default ChallengePage

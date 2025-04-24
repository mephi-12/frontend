import { ElgamalCryptosistemTask } from "@shared/api/elgamalCryptosystem/types"
import { SatchelCryprosystemTask } from "@shared/api/satchelCryprosystem/types"
import { SatchelCryprosystemBackdoorTask } from "@shared/api/satchelCryprosystemBackdoor/types"

export type Task =
    | SatchelCryprosystemTask
    | SatchelCryprosystemBackdoorTask
    | ElgamalCryptosistemTask

export enum TaskStatus {
    IN_PROGRESS = 'IN_PROGRESS',
    SOLVED = 'SOLVED'
}

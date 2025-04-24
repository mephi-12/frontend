import { ElgamalCryptosistemTask } from "@shared/api/elgamalCryptosystem/types";
import { SatchelCryprosystemTask } from "@shared/api/satchelCryprosystem/types";
import { SatchelCryprosystemBackdoorTask } from "@shared/api/satchelCryprosystemBackdoor/types";
import { Task } from "@shared/types/Task";

export const isSatchelCryptosystemTask = (task: Task): task is SatchelCryprosystemTask =>
 !!((task as SatchelCryprosystemTask).data.module || 
    (task as SatchelCryprosystemTask).data.state  || 
    (task as SatchelCryprosystemTask).data.omega)

export const isSatchelCryptosystemBackdoorTask = (task: Task): task is SatchelCryprosystemBackdoorTask =>
    !!((task as SatchelCryprosystemBackdoorTask).data.attackerKey || 
        (task as SatchelCryprosystemBackdoorTask).data.magicNumber  || 
        (task as SatchelCryprosystemBackdoorTask).data.keys)

export const isElgamalCryptosistemTask = (task: Task): task is ElgamalCryptosistemTask =>
    !!((task as ElgamalCryptosistemTask).data.ciphertext || 
        (task as ElgamalCryptosistemTask).data.publicKey ||
        (task as ElgamalCryptosistemTask).data.secretKey ||
        (task as ElgamalCryptosistemTask).data.prime)
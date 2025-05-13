import { challengeApi } from "@shared/api/challenge"
import { ElgamalCryptosistemBase, ElgamalCryptosistemServerResponse } from "@shared/api/elgamalCryptosystem/types";
import { SatchelCryprosystem, SatchelCryprosystemServerResponse, SatchelCryptosystemType } from "@shared/api/satchelCryprosystem/types";
import { Task } from "@shared/types/Task"
import { getAxiosError } from "@shared/utils/getAxiosError"
import { isElgamalCryptosistemTask, isSatchelCryptosystemTask } from "@shared/utils/taskType";
import { message } from "antd"


export const mapElgamalToRequest = (data: ElgamalCryptosistemBase) => ({
    p: data?.prime,
    g: data?.generator,
    x: data?.secretKey,
    m: data?.decoded_message,
    y: data?.publicKey,
    k: data?.k,
    c1: data?.ciphertext?.c1,
    yk: String(BigInt(data.publicKey || 0) ** BigInt(data.k || 0) % BigInt(data.prime || 0)),
    c2: data?.ciphertext?.c2,
    s: data?.s,
    decryptedMessage: data?.decoded_message,
    sinverse: String(modInverse(BigInt(data.s || 0), BigInt(data.prime || 0))),
})
  
function modInverse(a: bigint, m: bigint): bigint {
    let [oldR, r] = [a, m];
    let [oldS, s] = [1n, 0n];

    while (r !== 0n) {
        const quotient = oldR / r;
        [oldR, r] = [r, oldR - quotient * r];
        [oldS, s] = [s, oldS - quotient * s];
    }

    return oldS < 0n ? oldS + m : oldS;
}

const satchelCryprosystemType = {
    [SatchelCryptosystemType.POWER]: 'BACKPACK_CODE_DEGREES',
    [SatchelCryptosystemType.SIS]: 'BACKPACK_CODE_SUPER_INCREASING',
    'BACKPACK_CODE_DEGREES': SatchelCryptosystemType.POWER,
    'BACKPACK_CODE_SUPER_INCREASING': SatchelCryptosystemType.SIS
} as const;

export const mapSatchelCryprosystemRequest = (
    data: SatchelCryprosystem
  ): any => ({
    type: satchelCryprosystemType[data.type as keyof typeof satchelCryprosystemType],
    lightBackpack: data.lightBackpack || [],
    hardBackpack: data.heavyBackpack || [],
    reverseOmega: data.state,
    omega: data.omega,
    module: data.module,
    message: data.decoded_message?.split('').map(c => Boolean(Number(c) || 0)) || [],
    encodedMessage: data.encoded_message,
    power: data.type === SatchelCryptosystemType.POWER 
      ? Number(data.encoding_power || 0)
      : 0,
  });

export const submit = async (id: string, data: any) => {
    try {
        const wrapped = {data} as any
        if (isElgamalCryptosistemTask(wrapped)) {
            await challengeApi.submit(id, mapElgamalToRequest(wrapped.data as any))
        } else if (isSatchelCryptosystemTask(wrapped)) {
            await challengeApi.submit(id, mapSatchelCryprosystemRequest(wrapped.data))
        }
    } catch (error) {
        void message.error(getAxiosError(error))
    }
}

import { Entity } from "@shared/types/Entity"

export type SatchelCryprosystemBackdoorBase = {
    attackerKey: {        // PK_w злоумышленника
        module: string          // T (MOD)
        omega: string           // R
        state: string           // S
    }
    keys: {     // Параметры преобразования
        omega: string           // R
        state: string           // S = R⁻¹ mod T
        module: string          // T
    }
    magicNumber: {
        omega: string
        state: string
    }
    lightBackpack: string[]    // СВП (супервозрастающая последовательность)
    heavyBackpack: string[]    // Преобразованный публичный ключ {b_i}
    decoded_message: string    // = decoded_message_ten в двоичной
    encoded_message: string
    decoded_message_ten: string
    decoded_message_ten_full: string
}

export type SatchelCryprosystemBackdoor
    = Entity & Partial<SatchelCryprosystemBackdoorBase>

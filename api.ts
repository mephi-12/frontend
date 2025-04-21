export type Contest = {
    id: string
    name: string
    description: string
    startDate: Date
    endDate: Date
}

export type BackpackTask = {
    id: string
    createdAt: string
    state: string
    power: string,
    type: string
    message: boolean[]
    lightBackpack: string[]
    heavyBackpack: string[]
    omega: string
}

export type BackpackBackdoorTask = {
    id: string
    createdAt: string
    PK_w: string
    SK_w: string
    R: string
    S: string
    T: string
    lightBackpack: string[]
    heavyBackpack: string[]
    M: string
    C: string
}

export type BackdoorKnapsackTask = {
    id: string
    createdAt: Date
    attackerPublicKey: {  // PK_w злоумышленника
        modulus: string    // N (MOD)
        multiplier: string // ω
    }
    attackerPrivateKey: string  // SK_w (обратный элемент к ω)
    transformationParams: {     // Параметры преобразования
        baseMultiplier: string    // R
        inverseMultiplier: string // S = R⁻¹ mod T
        modulus: string           // T
    }
    originalSequence: string[]  // СВП (супервозрастающая последовательность)
    publicKeySequence: string[] // Преобразованный публичный ключ {b_i}
    plaintext: string           // Исходное сообщение M
    ciphertext: string          // Криптограмма C
}

export type ElgamalTask = {
    id: string;
    createdAt: Date;
    prime: string;
    generator: string;
    secretKey: string;
    publicKey: string;
    message: string;
    k: string | null;
    ciphertext: {c1: string; c2: string} | null;
    signature?: {r: string; s: string};
}

export const endpoints = [
    {
        endpoint: "POST/auth/login",
        request: {
            email: "string",
            password: "string"
        },
        response: {
            accessToken: "string"
        }
    },
    {
        endpoint: "POST/auth/registration",
        request: {
            email: "string",
            username: "string",
            password: "string"
        },
        response: {
            accessToken: "string"
        }
    },
    {
        endpoint: "GET/user/self",
        response: {
            email: "string",
            password: "string"
        }
    },
    {
        endpoint: "GET/user/list",
        response: { email: "string", password: "string" }, // массив пользователей
        role: "admin"
    },
    {
        endpoint: "POST/contest/create",
        response: {
            // Contest & {userIds} - типа можно указать, кто, когда будет делать
        },
        role: "admin"
    },
    {
        endpoint: "POST/contest/:contestId",
        response: {
            // здесь короче мапу { user to results } - какую-то статистику по решенным задачам отображаем + ссылку на задачу из архива
        },
        role: "admin"
    },
    {
        endpoint: "GET/contest/my", // возвращает все открытые контесты
        response: {} // Contest[]
    },
    {
        endpoint: "GET/contest/:contestId/tasks/backpack",
        response: {} // BackpackTask
    },
    {
        endpoint: "GET/contest/:contestId/tasks/backpackbackdoor",
        response: {} // BackpackBackdoorTask
    },
    {
        endpoint: "GET/contest/:contestId/tasks/elgamal",
        response: {} // ElgamalTask
    },
    {
        endpoint: "POST/contest/:contestId/tasks/:taskId/check",
        request: {}, // BackpackTask | BackpackBackdoorTask | ElgamalTask
        response: {
            status: true, //boolean
        }
    },
    {
        endpoint: "PUT/tasks/backpack/editorial", // типа демо (уже сделано)
        response: {} // BackpackTask
    },
    {
        endpoint: "PUT/tasks/backpackbackdoor/editorial", // типа демо
        response: {} // BackpackBackdoorTask
    },
    {
        endpoint: "PUT/tasks/elgamal/editorial", // типа демо
        response: {} // ElgamalTask
    },
    {
        endpoint: "GET/tasks/archive/backpack/my", // архивные задачи (мои), + ручка для админа, чтобы мог промодерировать задание
        response: {} // BackpackTask[]
    },
    {
        endpoint: "GET/tasks/archive/backpackbackdoor/my", // архивные задачи (мои), + ручка для админа, чтобы мог промодерировать задание
        response: {} // BackpackBackdoorTask[]
    },
    {
        endpoint: "GET/tasks/archive/elgamal/my", // архивные задачи (мои), + ручка для админа, чтобы мог промодерировать задание
        response: {} // ElgamalTask[]
    },
]
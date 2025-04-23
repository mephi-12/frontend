export type LoginRequestParams = {
    email: string
    password: string
}
export type RegistrationRequestParams = {
    name: string
    surname: string
} & LoginRequestParams

export type AccessToken = {
    accessJwt: string
}
import { http } from "../instance"
import { AccessToken, LoginRequestParams, RegistrationRequestParams } from "./types"

export const authApi = {
    signin: (data: LoginRequestParams) =>
        http.post<LoginRequestParams, AccessToken>('/auth/login', data),
    signup: (data: RegistrationRequestParams) =>
        http.post<RegistrationRequestParams, AccessToken>('/auth/registration', data)
}

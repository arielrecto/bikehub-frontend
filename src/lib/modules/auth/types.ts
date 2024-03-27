export interface User {
    name: string;
    email: string;
    password: string;
}

export interface UserRegisterResponse {
    message: string;
    user: User;
    token: string;
}

export interface UserRegisterPayload {
    name: string;
    email: string;
    password: string;
    password_confirmation?: string;
}
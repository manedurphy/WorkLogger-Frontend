export function setLoginTokens(token: string, refresh: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refresh);
}

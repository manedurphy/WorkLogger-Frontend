export function setLoginTokens(token: string, refresh: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refresh);
}

export function clearTokens() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
}

export function getTokens(): { token: string | null; refreshToken: string | null } {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    return { token, refreshToken };
}

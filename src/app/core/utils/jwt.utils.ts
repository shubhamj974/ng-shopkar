// jwt.utils.ts
export function decodeJwt(token: string): any {
    try {
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    } catch (e) {
        return null;
    }
}

export function getTokenExpiry(token: string): number | null {
    const decoded = decodeJwt(token);
    return decoded?.exp ? decoded.exp * 1000 : null;
}

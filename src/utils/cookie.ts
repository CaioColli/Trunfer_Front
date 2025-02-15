export const setCookie = (name: string, value: string, hours?: number) => {
    let tokenExpire = '';

    if (hours) {
        const date = new Date();
        date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // Horas em milissegundos
        tokenExpire = "; expires=" + date.toUTCString();
    }

    document.cookie = `${name}=${value || ""}${tokenExpire}; path=/;`;
}

export const getCookie = (name: string) => {
    const cookieName = name + "=";
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }   
    return null; 
}

// Usar para logout
export const deleteCookie = (name: string) => {
    document.cookie = name + "=; Max-Age=-99999999; path=/;";
}
export function isEmail(str) {
    str = str.trim();
    const parts = str.split('@');

    if (parts.length !== 2 || str.includes('..')) {
        return false;
    }

    const allowedSymbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.';
    const [locale, domain] = parts;

    if (locale === '' || domain === '' || locale[0] === '.' || domain[0] === '.' || domain[domain.length - 1] === '.') {
        return false;
    }

    for (const symbol of locale) {
        if (!allowedSymbols.includes(symbol)) {
            return false;
        }
    }
    return true;
}
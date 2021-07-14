export const limitText = (text, length) => (text ? text.substring(0, length) + (text.length > length ? ' ...' : '') : '');

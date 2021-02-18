
export const type = 'UPDATE_THEME';

/**
 * @param {string} theme 
 */
export const updateTheme = (theme) => {
    return {
        type,
        payload: theme
    }
};
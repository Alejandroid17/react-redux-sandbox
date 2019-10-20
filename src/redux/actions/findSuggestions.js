export const type = 'findSuggestions';

// Accion
const findSuggestions = text =>  {
    return {
        type,
        payload: text,
    };
};

export default findSuggestions;
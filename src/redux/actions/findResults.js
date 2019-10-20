export const type = 'findResults';

// Accion
const findResults = text =>  {
    return {
        type,
        payload: text,
    };
};

export default findResults;
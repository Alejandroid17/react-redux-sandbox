export const type = 'findCurrentItem';

// Accion
const findCurrentItem = id =>  {
    return {
        type,
        payload: id,
    };
};

export default findCurrentItem;
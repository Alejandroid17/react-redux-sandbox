export const type = 'saveOCR';

// Accion
const saveOCR = ocr => {
    return {
        type,
        payload: ocr,
    };
};

export default saveOCR;
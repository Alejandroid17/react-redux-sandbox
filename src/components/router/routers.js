import Storage from './../storage';
import OCR from './../ocr';

const routersList = [
    { path: '/ocr', component: OCR, exact: true },
    { path: '/storage', component: Storage, exact: true },
];

export default routersList;

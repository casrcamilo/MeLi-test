"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItemList = void 0;
const items = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' },
    { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];
const getItemList = () => {
    return items;
};
exports.getItemList = getItemList;

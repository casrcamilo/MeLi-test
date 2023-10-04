"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItems = void 0;
const itemService_1 = require("../services/itemService");
const getItems = (req, res) => {
    const items = (0, itemService_1.getItemList)();
    res.json(items);
};
exports.getItems = getItems;

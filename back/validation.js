import { body } from "express-validator";
export const loginValidation = [
    body('email', 'Неправильний логін чи пароль').isEmail(),
    body('password', 'Неправильний логін чи пароль').isLength({ min: 8 }),
];
export const registerValidation = [
    body('fullName', 'Вкажіть імя').isLength({ min: 3 }),
    body('email', 'Неправильний логін чи пароль').isEmail(),
    body('password', 'Неправильний логін чи пароль').isLength({ min: 8 }),
    body('avatarUrl').optional().isURL(),
];

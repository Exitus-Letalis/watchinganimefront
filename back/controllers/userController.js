import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserModel from '../models/user.js';
import user from "../models/user.js";


export const register = async (req, res) => {
    try {
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);


        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            passwordHash: hash,
            avatarUrl: req.body.avatarUrl

        });

        const user = await doc.save();
        const token = jwt.sign({
            _id: user._id,
        },
            'uzhnu2024',
            {
                expiresIn: '30d'
            });

        const { passwordHash, ...userData } = user._doc;
        res.json({
            ...userData,
            token
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "can't create a register"
        })
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json({
                message: 'Невірний логін або пароль',
            });
        }


        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if (!isValidPass) {
            return res.status(401).json({
                message: 'Невірний логін або пароль',
            });
        }

        const token = jwt.sign({
            _id: user._id,
        },
            'uzhnu2024',
            {
                expiresIn: '30d'
            });


        const { passwordHash, ...userData } = user._doc;
        res.json({
            ...userData,
            token
        });

    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Не вдалось авторизуватись",
        });
    }
};

export const profile = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: 'Користувача незнайдено',
            })
        }
        const { passwordHash, ...userData } = user._doc;
        res.json(userData);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Нема доступу',
        })

    }
}
export const update = async (req, res) => {
    try {
        const userId = await UserModel.findById(req.userId);

        // Check if userId is valid
        if (!userId) {
            return res.status(400).json({
                message: "User ID is required",
            });
        }

        const updateResult = await user.findByIdAndUpdate(
            userId,
            { imageUrl: req.body.imageUrl },
            { new: true }  // Optional: returns the updated document
        );

        // Check if user was found and updated
        if (!updateResult) {
            return res.status(404).json({
                message: "User not found",
            });
        }

        res.json({
            success: true,
            data: updateResult.imageUrl,  // Optionally return the updated document
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Не вдалось оновити продукт",
        });
    }
};

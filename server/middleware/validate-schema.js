import { validationResult } from "express-validator";

export const validateSchema = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(404).json(
                {
                    success: false,
                    message:result.errors[0].msg 
                });
    }
    next();
}
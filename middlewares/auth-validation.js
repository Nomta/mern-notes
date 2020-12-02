const {body, validationResult} = require('express-validator')
const PASSWORD_LENGTH = 3

exports.authRules = [
    body('email').isEmail(),
    body('password', `Password must be at least ${PASSWORD_LENGTH} characters long`)
        .isLength({ min: PASSWORD_LENGTH })
]

exports.loginRules = [
    body('email', 'Enter correct email').normalizeEmail().isEmail(),
    body('password', 'Enter password').exists({ min: 3 })
]

exports.checkResult = function (req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ 
            errors: errors.array(), 
            message: 'Uncorrect data' 
        });
    }
    next()
}
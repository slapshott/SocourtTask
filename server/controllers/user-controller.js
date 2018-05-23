const encryption = require('../util/encryption');
const User = require('mongoose').model('User');

module.exports = {
    
    registerPost: async (req, res) => {
        console.log('here')
        const reqUser = req.body;
        const salt = encryption.generateSalt();
        const hashedPass =
            encryption.generateHashedPassword(salt, reqUser.password);
        try {
            const user = await User.create({
                username: reqUser.username,
                hashedPass,
                salt,
                roles: []
            });
            req.logIn(user, (err, user) => {
                if (err) {
                    console.log(err)
                    res.locals.globalError = err;
                    res.redirect('/register', user);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            console.log(e);
            res.locals.globalError = e;
            res.redirec('/register');
        }
    },

    logout: (req, res) => {
        req.logout();
        res.redirect('/');
    },
    
    loginPost: async (req, res) => {
        const reqUser = req.body;
        try {
            const user = await User.findOne({ username: reqUser.username });
            if (!user) {
                errorHandler('Invalid user data');
                return;
            }
            if (!user.authenticate(reqUser.password)) {
                errorHandler('Invalid user data');
                return;
            }
            req.logIn(user, (err, user) => {
                if (err) {
                    errorHandler(err);
                } else {
                    res.redirect('/');
                }
            });
        } catch (e) {
            errorHandler(e);
        }

        function errorHandler(e) {
            console.log(e);
            res.locals.globalError = e;
            res.redirect('/login');
        }
    }

    
};
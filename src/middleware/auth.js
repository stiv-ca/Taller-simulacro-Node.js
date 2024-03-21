const passport = require('passport');

const {Strategy , ExtractJwt} = require('passport-jwt');
const jwtSecret = require('../controllers/control');

const strategy = new Strategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: jwtSecret
    },

    (payLoad,done) => {
        try {
            users.findById({userId: payLoad._id}),(err,user) => {
                if(!user) {
                    const error = new Error('User not found');
                    console.log(error);
                }else if (user) {
                    return done(null, user);
                }else {
                    return done(null,false);
                }
            };

        } catch (error) {
            done(error);
        }
    }
);

passport.use(strategy);

const initialize = () => {
    return passport.initialize();
};

const authenticated = () => {
    return passport.authenticate('jwt', {session: false});
};

module.exports = {
    initialize,
    authenticated
};
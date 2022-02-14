const {User} = require('../models/User');

let auth = (req, res, next) => {
    //인증 처리를 하는곳

    // 클라이언트 쿠키에서 토큰 가져옴
    let token = req.cookies.x_auth;

    //  토큰을 복호화 한후 유저를 찾는다.
    User.findByToken(token, (err,user) => {
        if(err) throw err;
        if(!user ) {
            return res.status(200).send({isAuth: false,err : true})
            //return res.status(400).send(err);
        }

        req.token = token;
        req.user = user;
        next();
    })

    // 유저가 있으면 인증 0k

    // 유저가 없으면 인증 불가
}

module.exports = {auth};
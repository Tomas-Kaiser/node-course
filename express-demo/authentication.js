function auth(req, res, next){
    console.log("Authoticating...")
    next();
}

module.exports = auth;
const path = require('path');

module.exports = (req, res) => {
    res.status(200).sendFile(path.resolve(`${__dirname}/../../build${req.originalUrl}`));
}
const path = require('path');

export const send = (req, res) => {
    res.status(200).sendFile(path.resolve(`${__dirname}/../../build${req.originalUrl}`));
}
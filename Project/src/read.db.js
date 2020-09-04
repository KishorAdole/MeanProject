const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const database = require("./config.db");

const readData = async (input) => {
    const Connection = mysql.createConnection(database);

    await Connection.connectAsync();
    const query = "SELECT Email, Password FROM user WHERE Email=? AND Password=?";

    const Result = await Connection.queryAsync(query, [
        input.Email,
        input.Password
    ]);

    await Connection.endAsync();

    if (Result === 0) {
        throw new Error("Invalid Credentials");
    }

};

module.exports = { readData };
const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const database = require("./config.db");

const updateData = async (input) => {
    const Connection = mysql.createConnection(database);

    await Connection.connectAsync();
    const query = "UPDATE user SET Password=?, Confirm_Password=? WHERE Email=?";

    await Connection.queryAsync(query, [
        input.Password,
        input.Confirm_Password,
        input.Email
        
    ]);

    await Connection.endAsync();

};

module.exports = { updateData };

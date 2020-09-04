const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const database = require("./config.db");

const insertData = async (input) => {
    const Connection = mysql.createConnection(database);

    await Connection.connectAsync();
    const query = "INSERT INTO user(First_Name, Last_Name, Email, Password, Confirm_Password) VALUES(?,?,?,?,?)";

    await Connection.queryAsync(query, [
        input.First_Name,
        input.Last_Name,
        input.Email,
        input.Password,
        input.Confirm_Password
    ]);

    await Connection.endAsync();

};

module.exports = { insertData };


class Connection{

    async connect() {
        this.db = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'Password!',
            database: 'burgers_db'
        });
        try {
            await this.db.connect();
        } catch (e) {
            console.log(e);
        }
    }
}




module.exports = Connection;
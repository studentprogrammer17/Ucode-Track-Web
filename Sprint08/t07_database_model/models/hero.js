const Model = require('./model');

module.exports = class Hero extends Model {
    constructor(...args) {
        super(...args);
    }

    find(id) {
        if (this.connection.getConnectionStatus()) {
            let result = this.connection.connection.query("SELECT * FROM this.table WHERE id=$id");
            let pdo = result.fetch(FETCH_ASSOC);
            if (pdo) {
                this.id = pdo["id"];
                this.name = pdo["name"];
                this.description = pdo["description"];
                this.race = pdo["race"];
                this.deleteclass_role = pdo["class_role"]; 
            }
            else return -1;
        }
    }

    delete() {
        if (this.connection.getConnectionStatus()) {
            let result = this.connection.connection.query("SELECT id FROM " + this.table + " WHERE id = " + this.id + ";");
            let pdo = result.fetch(FETCH_ASSOC);

            if (pdo["id"]) {
                let sql = "DELETE FROM this.table WHERE id = this.id";
                let stmt = this.connection.connection.prepare(sql);
                stmt.execute();
                this.id = null;
                this.name = null;
                this.description = null;
                this.race = null;
                this.class_role = null;
            }
            else return -1;
        }
    }

    save() {
        if (this.connection.getConnectionStatus()) {
            let result = this.connection.connection.query("SELECT id FROM " + this.table + " WHERE id = " + this.id + ";");
            let pdo = result.fetch(FETCH_ASSOC);
            if (!pdo["name"]) {
                let sql = "INSERT INTO `Heroes` (id, name, description, race, class_role) VALUES (id, name, description, race, class_role)";
                let stmt = this.connection.connection.prepare(sql);
                stmt.bindParam("id", this.id);
                stmt.bindParam("name", this.name);
                stmt.bindParam("description", this.description);
                stmt.bindParam("race", this.race);
                stmt.bindParam("class_role", this.class_role);
                stmt.execute();
            }

            else {
                let sql = `UPDATE Heroes SET id=${this.id}, name=${this.name}, description=${this.description}, race=${this.race}, class_role=${this.class_role}  WHERE id=${this.id}`;
                let stmt = this.connection.connection.prepare(sql);
                stmt.bindParam("id", this.id);
                stmt.bindParam("name", this.name);
                stmt.bindParam("description", thi.description);
                stmt.bindParam("race", this.race);
                stmt.bindParam("class_role", this.class_role);
                stmt.execute();
            }
        }
    }
}


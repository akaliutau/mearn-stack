db.createUser({
        user: "dbadmin",
        pwd: "dbadmin",
        roles: [
            {
                role: "readWrite",
                db: "admin"
            }
        ]
});
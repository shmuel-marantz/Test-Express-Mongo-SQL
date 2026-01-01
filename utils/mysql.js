import mysql from "mysql2/promise";

export async function initSqlDb() {
  const initConnection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
  });
    const CREATE_DB_QUERY = `CREATE DATABASE IF NOT EXISTS cipherVault;`;

  const USE_DB_QUERY = "USE cipherVault;";

  const CREATE_TABLE_QUERY = `
      CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        cipher_type VARCHAR(100) NOT NULL,
        encrypted_text VARCHAR(255) NOT NULL,
        inserted_at DATETIME
      )`;

  await initConnection.query(CREATE_DB_QUERY);
  await initConnection.query(USE_DB_QUERY);
  await initConnection.query(CREATE_TABLE_QUERY);

  await initConnection.end();
}

let conn = null;

export async function getMysqlConnection() {
  if (conn) return conn;
  else {
      conn = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      port: 3306,
      database: "cipherVault",
    });
    return conn;
  }
}

import { connect, connection } from "mongoose";

const conn = {
  isConnected: false,
};
async function connectDB() {
  if (conn.isConnected) return;
  const db = await connect(
    process.env.MONGODB_URI,
     { useNewUrlParser: true })
  .catch(error => {
    console.error('Error de conexión a la base de datos:', error);
  }
  );
  console.log(db.connection.db.databaseName);
  conn.isConnected = db.connections[0].readyState;
}

connection.on("connected", () => {
  console.log("Mongoose is connected");
});
connection.on("error", () => {
  console.log("Mongoose  connection error");
});

export default connectDB;
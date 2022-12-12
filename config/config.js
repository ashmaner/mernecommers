const mongoose = require("mongoose");
require("colors");
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI ||"mongodb+srv://ash1234:ipIDoePK5FwP6VDQ@cluster0.tabqkjv.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`Mongodb Connected ${conn.connection.host}`.yellow);
  } catch (error) {
    console.error(`Error : ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDb;

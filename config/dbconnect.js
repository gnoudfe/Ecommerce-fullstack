const { default: mongoose } = require("mongoose");
mongoose.set("strictQuery", false);
const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URL);
    if (connect.connection.readyState === 1) {
      console.log("DB Connected is successfully");
    }
  } catch (error) {
    console.log("DB connect is failed");
    throw new Error(error);
  }
};

module.exports = dbConnect;

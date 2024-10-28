// db/connectToMongoDB.js
import mongoose from 'mongoose';

export const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 20000, // 20 seconds timeout
		});
		console.log("Connected to MongoDB");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error.message);
	}
};

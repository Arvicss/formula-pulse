import type { IDatabase } from "@/shared/infrastructure/database/core/IDatabase";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export class MongoDatabase implements IDatabase {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_DB_URI!);
    } catch (error) {
      console.error("[DATABASE] Connection Error: ", error);
    }
  }

  public async disconnect(): Promise<void> {
    try {
      await mongoose.disconnect();
    } catch (error) {
      console.error("[DATABASE] Disconnect Error: ", error);
    }
  }

  public async isConnected(): Promise<boolean> {
    return (mongoose.connection.readyState === 1);
  }
}
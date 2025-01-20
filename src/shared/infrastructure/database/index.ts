import { MongooseUnitOfWork } from "@/shared/infrastructure/database/mongoose/mongooseUnitOfWork";
import { MongoDatabase } from "@/shared/infrastructure/database/mongoose/mongooseDatabase";

const unitOfWork = new MongooseUnitOfWork();
const database = new MongoDatabase();

export { unitOfWork, database };
import type { IUnitOfWork } from "@/shared/infrastructure/database/core/IUnitOfWork";
import { type ClientSession, startSession } from "mongoose"

export class MongooseUnitOfWork implements IUnitOfWork {
  private _session?: ClientSession;

  public async startTransaction(): Promise<void> {
    this._session = await startSession();
    this._session?.startTransaction();
  }

  public async commitTransaction(): Promise<void> {
    if (!this._session) {
      throw new Error("Session does not exist.");
    }

    await this._session.commitTransaction();
  }

  public async abortTransaction(): Promise<void> {
    if (!this._session) {
      throw new Error("Session does not exist.");
    }

    await this._session.abortTransaction();
  }

  public async endTransaction(): Promise<void> {
    if (!this._session) {
      throw new Error("Session does not exist.");
    }

    await this._session.endSession();
  }
}

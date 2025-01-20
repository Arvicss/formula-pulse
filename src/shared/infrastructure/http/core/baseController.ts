import { ApolloError } from "apollo-server";
import { BadRequest, NotFoundError } from "@/shared/core/errors";

export abstract class BaseController<IRequest, IResponse> {
  protected abstract executeImpl(request?: IRequest): Promise<IResponse>;

  public execute(request?: IRequest): Promise<IResponse> {
    try {
      return this.executeImpl(request);
    } catch (error) {
      throw this._convertError(error as Error);
    }
  }

  private _convertError(error: Error): ApolloError {
    if (error instanceof BadRequest) {
      return this.badRequest(error.message);
    }

    if (error instanceof NotFoundError) {
      return this.notFound(error.message);
    }

    return new ApolloError(error.message, "INTERNAL_SERVER_ERROR");
  }

  protected badRequest(message: string): ApolloError {
    return new ApolloError(message, "BAD_REQUEST");
  }

  protected notFound(message: string): ApolloError {
    return new ApolloError(message, "NOT_FOUND");
  }
}

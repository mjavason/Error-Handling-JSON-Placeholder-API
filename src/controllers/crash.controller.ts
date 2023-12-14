import { Request, Response } from 'express';
import { crashService } from '../services';
import {
  SuccessResponse,
  InternalErrorResponse,
} from '../helpers/response.helper';

class CrashController {
  async getAllSymbols(req: Request, res: Response) {
    let result: any = {};

    try { 
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }

  async getLatestCrashs(req: Request, res: Response) {
    let result: any = {};

    try {
      return SuccessResponse(res, result);
    } catch (error: any) {
      return InternalErrorResponse(res, error.message);
    }
  }
}

export const crashController = new CrashController(); // Instantiate your crash service

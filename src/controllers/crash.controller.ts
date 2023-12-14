import { Request, Response } from 'express';
import { crashService } from '../services';
import {
  SuccessResponse,
  InternalErrorResponse,
} from '../helpers/response.helper';
import axios from 'axios';

class CrashController {
  async crash1(req: Request, res: Response) {
    // Example: Trying to divide by zero
    const result = 10 / 0; // This will throw a divide-by-zero error
  }

  async crash2(req: Request, res: Response) {
    // Example: Throwing a custom error
      throw new Error('Crash2 intentional error');
  }

  async crash3(req: Request, res: Response) {
    // Example: Making an invalid HTTP request
      const response = await axios.get('invalid-url');
  }
}

export const crashController = new CrashController();

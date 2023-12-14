import { Server } from 'http';
import 'express-async-errors';
import app from './app';
import logger from './helpers/logger.helper';
import { NextFunction, Request, Response } from 'express';
import { InternalErrorResponse } from './helpers/response.helper';
import { createJSONFile } from './helpers/file.helper';

// setting up server
const PORT = process.env.PORT || 5000;

const server: Server = app.listen(PORT, async () => {
  logger.info(`Server running on port ${PORT}`);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // createJSONFile('', 'error', err);
  if (err.message) logger.error(err.message);

  return InternalErrorResponse(res);
});

// handle unhanled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);

  // close server
  server.close(() => process.exit(1));
});

export default server;

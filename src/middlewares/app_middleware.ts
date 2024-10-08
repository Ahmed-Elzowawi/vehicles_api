import methodOverride from 'method-override';
import helmet from 'helmet';
import compression from 'compression';
import express, { Express } from 'express';

export const handleAppMiddleware = (app: Express) => {
  // parses incoming requests with JSON payloads
  app.use(express.json());

  // ability to use HTTP verbs PUT or DELETE (client only supports HTTP verbs GET and POST)
  app.use(methodOverride('_method'));

  // secure HTTP response headers
  app.use(helmet());

  app.use(compression());
};

import * as mongoose from 'mongoose';
export const databaseProviders = [
  {
    provide: 'TWITTER_MICROSERVICES',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://mongodb-twitter:27018/user'),
  },
];

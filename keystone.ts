import { config } from '@keystone-6/core';

import { lists } from './schema';
import { withAuth, session } from './auth';

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL || 'postgres://postgres@localhost:5432/nobisoft_todo_db',
    },
    lists,
    session,
  })
);

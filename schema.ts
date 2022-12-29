import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';

import {
  text,
  password,
  timestamp,
  checkbox,
} from '@keystone-6/core/fields';

import type { Lists } from '.keystone/types';

export const lists: Lists = {
  User: list({
    access: allowAll,
    fields: {
      name: text({
        validation: {
          isRequired: true,
          length: {
            min: 2,
            max: 64,
          },
        },
        db: {
          nativeType: 'VarChar(255)',
        },
      }),

      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
      }),

      password: password({ validation: { isRequired: true } }),

      createdAt: timestamp({
        defaultValue: { kind: 'now' },
        db: { map: 'created_at' },
      }),

      updatedAt: timestamp({
        db: {
          map: 'updated_at',
          updatedAt: true,
        },
      }),
    },
    db: { map: 'users' },
  }),

  Todo: list({
    access: allowAll,
    fields: {
      text: text({
        validation: {
          isRequired: true,
          length: {
            min: 3,
            max: 255,
          },
        },
        db: {
          nativeType: 'VarChar(255)',
        },
      }),

      isCompleted: checkbox({
        db: {
          map: 'is_completed',
        },
      }),

      createdAt: timestamp({
        defaultValue: { kind: 'now' },
        db: { map: 'created_at' },
      }),

      updatedAt: timestamp({
        db: {
          map: 'updated_at',
          updatedAt: true,
        },
      }),
    },
    db: { map: 'todos' },
  }),
};

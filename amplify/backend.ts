import { defineBackend } from '@aws-amplify/backend';
import { defineStorage, StorageAccess } from '@aws-amplify/backend/storage';
import { auth } from './auth/resource';
import { data } from './data/resource';

const storage = defineStorage({
  name: 'hart-eu',
  access: StorageAccess.PUBLIC,
  permissions: {
    guest: { write: true }
  }
});

const backend = defineBackend({
  auth,
  data,
  storage
});




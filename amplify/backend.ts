import { defineBackend,defineStorage,StorageAccess } from '@aws-amplify/backend';
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




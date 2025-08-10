import { defineBackend,defineStorage } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const storage = defineStorage({
  name: 'hart-eu'
});

const backend = defineBackend({
  auth,
  data,
  storage
});




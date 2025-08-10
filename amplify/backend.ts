import { defineBackend,defineStorage } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const storage = defineStorage({
  name: 'hart-eu',
  access: 'private' // 先以私有方式创建
});

const backend = defineBackend({
  auth,
  data,
  storage
});




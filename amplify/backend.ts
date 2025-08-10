import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

backend.addOutput({
  storage: {
    aws_region: 'eu-central-1',
    bucket_name: 'hart-eu',
    
    buckets: [
      {
        aws_region: 'eu-central-1',
        bucket_name: 'hart-eu',
        name: 'hart-eu',
        paths: {
          // 公开路径：允许所有用户（包括未认证用户）读写
          'public/*': {
            guest: ['read', 'write'],       // 未认证用户可读写
            authenticated: ['read', 'write'] // 已认证用户可读写
          },
          // 保留其他路径的原有配置（如果需要）
          'protected/{entity_id}/*': {
            authenticated: ['read', 'write'],
            entityidentity: ['read', 'write']
          },
          'private/{entity_id}/*': {
            entityidentity: ['read', 'write']
          }
        }
      }
    ]
  }
})


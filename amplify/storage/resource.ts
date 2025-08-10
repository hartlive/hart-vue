import { defineStorage } from '@aws-amplify/backend';
import { Bucket } from '@aws-cdk/aws-s3';
import { Construct } from '@aws-cdk/core';

export const storage = defineStorage({
  name: 'hart-eu',
  cdk: {
    bucket: (scope: Construct) => {
      // 引用已存在的桶（需确保桶在当前AWS账号和区域中存在）
      return Bucket.fromBucketName(scope, 'ExistingHartBucket', 'hart-eu');
    }
  },
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read', 'write']),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read', 'write']),
      allow.entity('identity').to(['read', 'write'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write'])
    ]
  })
});
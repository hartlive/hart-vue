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
  }
});
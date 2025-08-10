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
        policy: {
          Version: '2012-10-17',
          Statement: [
            {
              Effect: 'Allow',
              Principal: '*',
              Action: 's3:GetObject',
              Resource: 'arn:aws:s3:::hart-eu/*'
            }
          ]
        }
      }
    ]
  }
})


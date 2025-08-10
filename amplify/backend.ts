import { defineBackend, defineStorage } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

// 定义存储桶（旧版本语法，无permissions字段）
const storage = defineStorage({
  name: 'hart-eu',
  // 旧版本中access可能仅支持字符串值，直接指定"public"开启公开访问
  access: 'public', 
  // 可选：通过cors配置允许跨域读写
  cors: [
    {
      allowedHeaders: ['*'],
      allowedMethods: ['GET', 'PUT', 'POST', 'DELETE'],
      allowedOrigins: ['*'],
      maxAge: 3000
    }
  ]
});

const backend = defineBackend({
  auth,
  data,
  storage
});




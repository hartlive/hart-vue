import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

// 1. 定义存储桶（支持公开读写）
const storage = defineStorage({
  name: 'hart-eu', // 存储桶名称（需全局唯一）
  access: StorageAccess.PUBLIC, // 基础访问级别：公开可读
  permissions: {
    // 扩展权限：允许未认证用户（guest）写入
    guest: {
      write: true // 公开写入权限（结合PUBLIC的公开可读，实现完全公开读写）
    },
    // 已认证用户默认拥有读写权限，可根据需要调整
    authenticated: {
      read: true,
      write: true
    }
  },
  // 可选：配置CORS（跨域访问，如前端需要从浏览器直接访问）
  cors: [
    {
      allowedHeaders: ['*'],
      allowedMethods: ['GET', 'PUT', 'POST', 'DELETE'],
      allowedOrigins: ['*'], // 生产环境建议指定具体域名
      maxAge: 3000
    }
  ]
});

const backend = defineBackend({
  auth,
  data,
  storage
});




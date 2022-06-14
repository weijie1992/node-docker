// import { createClient } from 'redis';
const redis = require('redis');
// const client = redis.createClient();
// client.on('error', (err) => console.log('Redis Client Error', err));

// async function execute() {
//   try {
//     await client.connect();

//     await client.set('key', 'value1');
//     const value = await client.get('key');
//     console.log('🚀 ~ file: main.js ~ line 11 ~ execute ~ value', value);
//   } catch (e) {
//     console.error(e);
//   }
// }

// execute();

const connectRedis = async () => {
  try {
    let redisClient = redis.createClient({
      legacyMode: true,
      host: "localhost",
      port: 6379,
    });
    // const redisClient = redis.createClient();
    await redisClient.connect();
    console.log("🚀 ~ file: index2.js ~ line 29 ~ connectRedis ~ redisClient")
    
  } catch (e) {
    console.error(e);
  }
};
connectRedis();
import { Redis } from '@upstash/redis';

export const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
});

export const incrementCounter = async (key: string) => {
  try {
    await redis.incr(key);
  } catch (error) {
    console.error('Redis increment error:', error);
  }
};

export const getCounters = async () => {
  try {
    const [enrollClicks, downloadClicks, connectClicks, androidClicks, iosClicks] = await redis.mget([
      'erlBCk',
      'dldBCk',
      'ttlSCk',
      'Dandrd',
      'Dios',
    ]);

    return {
      enrollClicks: Number(enrollClicks) || 0,
      downloadClicks: Number(downloadClicks) || 0,
      connectClicks: Number(connectClicks) || 0,
      androidClicks: Number(androidClicks) || 0,
      iosClicks: Number(iosClicks) || 0,
    };
  } catch (error) {
    console.error('Redis get counters error:', error);
    return {
      enrollClicks: 0,
      downloadClicks: 0,
      connectClicks: 0,
      androidClicks: 0,
      iosClicks: 0,
    };
  }
}; 
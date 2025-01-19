import { PrismaClient } from '@prisma/client';
import { redis } from '../lib/redis';

const prisma = new PrismaClient();

async function resetDatabases() {
  try {
    // Reset PostgreSQL
    console.log('Resetting PostgreSQL database...');
    await prisma.waitlist.deleteMany();
    console.log('✅ PostgreSQL database reset complete');

    // Reset Redis counters
    console.log('Resetting Redis counters...');
    const keys = ['erlBCk', 'dldBCk', 'ttlSCk', 'Dandrd', 'Dios'];
    await Promise.all(keys.map(key => redis.del(key)));
    console.log('✅ Redis counters reset complete');

  } catch (error) {
    console.error('Error resetting databases:', error);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabases(); 
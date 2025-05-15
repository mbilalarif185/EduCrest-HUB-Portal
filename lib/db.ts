// lib/db.ts
import { Pool } from 'pg';

const globalForPool = global as unknown as { pgPool: Pool };

// Singleton pool to avoid creating new connections on every request
export const pgPool =
  globalForPool.pgPool ||
  new Pool({
    connectionString: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== 'production') globalForPool.pgPool = pgPool;

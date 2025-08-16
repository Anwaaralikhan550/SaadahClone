import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

if (!process.env.DATABASE_URL) {
  console.warn("WARNING: DATABASE_URL not set. Using fallback configuration.");
  // Create a temporary DATABASE_URL for development
  process.env.DATABASE_URL = "postgresql://user:password@localhost:5432/temp_db";
}

export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
export const db = drizzle({ client: pool, schema });
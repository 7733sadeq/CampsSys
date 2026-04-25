const postgres = require('postgres');

const connectionString = process.env.DATABASE_URL || 
  'postgresql://postgres:[Sadeq@1982aa]@db.toymcbwhhfimqvdadwwl.supabase.co:5432/postgres';

const sql = postgres(connectionString);

module.exports = sql;

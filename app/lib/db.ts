import sqlite3 from 'sqlite3';

export async function openDb() {
  return open({
    filename: '../../data.db',
    driver: sqlite3.Database,
    const db = new sqlite3.Database(filename);
  });
}

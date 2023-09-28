import { query } from './client';

export const getFlatsByPage = async (limit: string, offset: string) => {
  const { rows } = await query('SELECT * FROM flats LIMIT $1 OFFSET $2', [limit, offset]);
  const { rows: rowsCount } = await query('SELECT COUNT(*) FROM flats', []);

  return { rows, count: rowsCount[0].count };
};

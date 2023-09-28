import { Request, Response } from 'express';
import { getFlatsByPage } from '../db/flats';

export const getAllFlats = async (req: Request, res: Response) => {
  try {
    const { page, limit } = req.params;

    const offset: number = Number(limit) * (Number(page) - 1);

    const { rows, count } = await getFlatsByPage(limit, offset.toString());

    if (rows && count) return res.status(200).json({ rows, count });

    throw new Error('Something went wrong!');
  } catch (error) {
    if (error instanceof Error) return res.status(500).json({ message: error.message });
    console.log('Unexpected error!', error);
  }
};

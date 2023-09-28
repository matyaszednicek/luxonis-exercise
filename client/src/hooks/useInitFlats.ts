import { useEffect } from 'react';
import { useFlatsStore } from '../store/flatsStore';

export const useInitFlats = () => {
  const { flats, page, limit, fetchFlats } = useFlatsStore();

  useEffect(() => {
    fetchFlats();
  }, [page, limit, fetchFlats]);

  return flats;
};

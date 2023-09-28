import { useInitFlats } from '../../hooks/useInitFlats';
import FlatCard from './FlatCard';
import FlatsNavigation from './FlatsNavigation';

function FlatsContainer() {
  const flats = useInitFlats();

  return (
    <section className="flex flex-col w-full max-w-5xl gap-6 py-10 mx-auto">
      <div className="grid grid-cols-1 mx-auto w-fit justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
        {flats.map((flat) => (
          <FlatCard flat={flat} />
        ))}
      </div>
      <FlatsNavigation />
    </section>
  );
}

export default FlatsContainer;

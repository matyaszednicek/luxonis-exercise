import { MapPinIcon } from '@heroicons/react/24/outline';
import { Flat } from '../../types';

type Props = { flat: Flat };

export default function FlatCard({ flat }: Props) {
  return (
    <div
      onClick={() => window.open(flat.url, '_blank')}
      className="w-[300px] cursor-pointer gap-3 flex flex-col bg-gray-50 shadow-md shadow-black/5 p-4 rounded-2xl transition-transform hover:scale-[1.02] duration-300"
    >
      <figure className="relative">
        <img
          src={flat.image}
          alt={`Image of Flat ${flat.title}`}
          className="w-full shadow-xl aspect-video shadow-black/20 rounded-xl"
        />
        <span className="absolute px-2 py-1 text-sm font-semibold rounded-md text-gray-950 top-2 left-2 bg-gray-50">
          For Sale
        </span>
      </figure>
      <div className="flex flex-col justify-between h-full gap-1">
        <div>
          <h4 className="font-semibold text-md">{flat.title}</h4>
          <div className="flex items-start gap-1 text-sm font-normal text-gray-600">
            <MapPinIcon className="min-w-[18px] w-[18px] mt-[1px]" />
            <span>{flat.locality}</span>
          </div>
        </div>
        <p className="text-sm font-semibold text-right text-blue-600">{flat.price}</p>
      </div>
    </div>
  );
}

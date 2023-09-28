import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function NavBar() {
  return (
    <nav id="navbar" className="flex items-center w-full h-20 px-6 shadow-md md:px-10 bg-gray-50 shadow-black/5">
      <div className="flex items-center gap-6">
        <a href="/">
          <BuildingOffice2Icon className="w-12 p-1 text-blue-600 bg-blue-100 rounded-lg" />
        </a>
        <h1 className="text-2xl font-semibold">Luxonis Real Estate</h1>
      </div>
    </nav>
  );
}

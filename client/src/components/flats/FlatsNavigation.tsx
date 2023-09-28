import FlatsNavigationLimitChanger from './FlatsNavigationLimitChanger';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useFlatsStore } from '../../store/flatsStore';
import { scrollToNav } from '../../helpers/functions';

function FlatsNavigation() {
  const { updatePage, page, count, limit } = useFlatsStore();
  const isLastPage = limit * page >= count - limit;

  const handleNextPage = () => {
    if (!isLastPage) {
      scrollToNav();
      updatePage(page + 1);
    }
  };
  const handlePrevPage = () => {
    if (page > 1) {
      scrollToNav();
      updatePage(page - 1);
    }
  };

  return (
    <div className="relative flex justify-end w-full gap-4 pr-4 sm:pr-0 sm:justify-center">
      <FlatsNavigationLimitChanger />
      <button
        onClick={handlePrevPage}
        className={page > 1 ? 'p-2 bg-blue-100 rounded-full' : 'p-2 bg-gray-200 rounded-full cursor-default'}
      >
        <ArrowLeftIcon className={page > 1 ? 'text-blue-700 w-7' : 'text-gray-400 w-7'} />
      </button>
      <button
        onClick={handleNextPage}
        className={!isLastPage ? 'p-2 bg-blue-100 rounded-full' : 'p-2 bg-gray-200 rounded-full cursor-default'}
      >
        <ArrowRightIcon className={!isLastPage ? 'text-blue-700 w-7' : 'text-gray-400 w-7'} />
      </button>
    </div>
  );
}

export default FlatsNavigation;

import { useFlatsStore } from '../../store/flatsStore';

function FlatsNavigationLimitChanger() {
  const { updateLimit, limit } = useFlatsStore();

  const limits = [30, 60, 90];

  return (
    <div className="absolute flex gap-2 left-4">
      {limits.map((limitNum) => (
        <button
          onClick={() => updateLimit(limitNum)}
          className={
            limit === limitNum
              ? 'w-11 h-11 p-2 bg-blue-700 text-gray-50 rounded-full cursor-default'
              : 'w-11 h-11 p-2 bg-blue-100 text-blue-700 rounded-full'
          }
        >
          {limitNum}
        </button>
      ))}
    </div>
  );
}

export default FlatsNavigationLimitChanger;

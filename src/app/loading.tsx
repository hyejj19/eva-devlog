import { LoadingSpinner } from '../components/common/LoadingSpinner';

export default function Loading() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <LoadingSpinner />
    </div>
  );
}

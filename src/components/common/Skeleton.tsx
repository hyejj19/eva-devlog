interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = '' }: SkeletonProps) {
  return <div className={`skeleton ${className}`} />;
}

export function PostListSkeleton() {
  const skeletonItems = [
    'skeleton-1',
    'skeleton-2',
    'skeleton-3',
    'skeleton-4',
    'skeleton-5',
  ];

  return (
    <div className="w-full flex flex-col gap-2">
      {skeletonItems.map((id) => (
        <div key={id} className="w-full flex py-3 px-4 rounded-md items-center">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-16 ml-auto hidden sm:block" />
        </div>
      ))}
    </div>
  );
}

export function PostDetailSkeleton() {
  return (
    <div className="w-full animate-fade-in">
      {/* Title */}
      <Skeleton className="h-10 w-3/4 mb-4" />

      {/* Meta */}
      <div className="flex justify-end gap-2 mb-8">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>

      {/* Content */}
      <div className="space-y-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

import NewsSkeleton from "../components/Skeleton";

export default function Loading() {
  return (
    <div className="w-full space-y-10">
      {/* Skeleton do Banner Principal */}
      <div className="w-full h-[400px] md:h-[600px] bg-gray-100 animate-pulse flex items-end p-10">
        <div className="space-y-4 w-full max-w-2xl">
           <div className="h-4 w-24 bg-gray-200" />
           <div className="h-12 w-3/4 bg-gray-200" />
           <div className="h-6 w-full bg-gray-200" />
        </div>
      </div>

      {/* Skeletons das Notícias abaixo do banner */}
      <NewsSkeleton />
    </div>
  );
}
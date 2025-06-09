import { useSkipData, useSkipSelection } from "@/hooks";
import { SkipList, SkipSummary, LoadingState, ErrorState } from "@/components";

export const SkipSelectionPage = () => {
  const { skips, loading, error } = useSkipData("NR32", "Lowestoft");
  const { selectedSkip, selectSkip, clearSelection } = useSkipSelection();

  if (loading) {
    return <LoadingState message="Loading skip options..." />;
  }

  if (error) {
    return <ErrorState error={error} title="Error loading skip options" />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {/* Sticky Container for Header and Summary */}
      <div className="sticky top-[40px] sm:top-[50px] z-30 bg-gray-50">
        <div className="w-full px-4 sm:px-6 md:px-10 max-w-[1800px] mx-auto">
          <div className="py-4 sm:py-6 md:py-10">
            <header className="text-center">
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary-dark mb-3 sm:mb-4 leading-tight font-heading">
                Find the Perfect Skip for Your Project
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans px-2 sm:px-0">
                Choose from our range of skip sizes to suit your waste disposal
                needs
              </p>
            </header>
          </div>
          {selectedSkip && (
            <div className="pb-4 sm:pb-6">
              <div className="max-w-6xl mx-auto">
                <SkipSummary skip={selectedSkip} onClear={clearSelection} />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Skip List - Scrolls under the sticky header */}
      <div className="w-full px-4 sm:px-6 md:px-10 max-w-[1800px] mx-auto pb-6 sm:pb-10">
        <section>
          <SkipList
            skips={skips}
            selectedSkip={selectedSkip}
            onSelectSkip={selectSkip}
          />
        </section>
      </div>
    </div>
  );
};

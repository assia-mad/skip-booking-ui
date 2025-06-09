interface IErrorStateProps {
  error: string;
  title?: string;
}

export const ErrorState = ({
  error,
  title = "Error loading data",
}: IErrorStateProps) => (
  <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
    <div className="w-full px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
          <p className="text-error-red font-medium font-sans">{title}</p>
          <p className="text-red-500 text-sm mt-1 font-sans">{error}</p>
        </div>
      </div>
    </div>
  </div>
);

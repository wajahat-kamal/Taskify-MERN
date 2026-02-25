
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-transparent">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-black"></div>
    </div>
  );
};

export default Loader;
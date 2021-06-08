const Category = ({ title }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xs text-gray-500 uppercase">{title}</h1>
        <span className="w-4/5 border-b border-gray-300 "></span>
      </div>
    </div>
  );
};

export default Category;

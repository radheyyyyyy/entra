/* eslint-disable react/prop-types */
const OptionButton = ({ option, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-full text-sm font-medium transition-colors"
    >
      {option.text}
    </button>
  );
};

export default OptionButton; 
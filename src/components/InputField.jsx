const InputField = ({ label, type, placeholder }) => {
    return (
      <div className="mb-6">
        <label className="block text-[#4F46E5] text-sm font-medium mb-2">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full p-3 border rounded-lg focus:outline-[#4F46E5] focus:ring-2"
        />
      </div>
    );
  };
  
  export default InputField;
const InputField = ({
  label,
  type = "number",
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
      />

    </div>
  );
};

export default InputField;
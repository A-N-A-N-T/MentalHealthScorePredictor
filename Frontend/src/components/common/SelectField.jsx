const SelectField = ({
  label,
  name,
  value,
  onChange,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2">

      <label className="text-sm font-medium text-slate-300">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none transition focus:border-emerald-500"
      >
        <option value="">Select</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}

      </select>

    </div>
  );
};

export default SelectField;
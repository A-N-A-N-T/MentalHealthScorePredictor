const RangeField = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  step = 1,
}) => {
  return (
    <div className="flex flex-col gap-3">

      <div className="flex justify-between">
        <label className="text-sm font-medium text-slate-300">
          {label}
        </label>

        <span className="font-semibold text-emerald-400">
          {value}
        </span>
      </div>

      <input
        type="range"
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        className="accent-emerald-500"
      />

    </div>
  );
};

export default RangeField;
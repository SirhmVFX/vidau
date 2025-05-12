"use client"

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  className?: string;
  active?: boolean;
}

function SelectComponent({ options, label, value, onChange, name, className = '', active = false }: SelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <select
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full p-2 border-none rounded-sm text-[12px] ${className} ${active ? 'bg-[#3353F9] text-white pr-2' : 'text-[#3353F9]'} `}
      >
        <option value="">{label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value} className="text-[6px]">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectComponent;

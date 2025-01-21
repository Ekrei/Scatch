import React, { useState } from 'react';
import { LucideIcon, Eye, EyeOff } from 'lucide-react';

interface FormInputProps {
  label: string;
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  isSecure?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  icon: Icon,
  value,
  onChange,
  type = 'text',
  isSecure = false,
}) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleShowInfo = () => setShowInfo(!showInfo);

  const displayValue = isSecure && !showInfo ? '•'.repeat(value.length) : value;

  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type={type}
          value={displayValue}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 pr-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6E9F2] focus:border-transparent"
        />
        {isSecure && (
          <button
            type="button"
            onClick={toggleShowInfo}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            {showInfo ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};
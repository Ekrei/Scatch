import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FormInputProps {
  label: string;
  icon: LucideIcon;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  icon: Icon,
  value,
  onChange,
  type = 'text',
}) => {
  return (
    <div>
      <label className="block text-sm text-gray-600 mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E6E9F2] focus:border-transparent"
        />
      </div>
    </div>
  );
};
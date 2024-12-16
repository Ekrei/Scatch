import React from 'react';

interface ProfileAvatarProps {
  name: string;
  imageUrl: string;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ name, imageUrl }) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
      </div>
    </div>
  );
};
import { useState } from 'react';

const useEditModal = () => {
  const [isEditing, setIsEditing] = useState(false);

  function toggleEdit() {
    setIsEditing(!isEditing);
  }

  return {
    isEditing,
    toggleEdit,
  };
};

export default useEditModal;
import { useState } from 'react';

export function useDialog(title, successButton = 'Okay', cancelButton = 'Cancel') {
  const [dialogOpen, closeDialog] = useState(false);

  return {
    title,
    successButton,
    cancelButton,
    dialogOpen,
    closeDialog,
  };
}

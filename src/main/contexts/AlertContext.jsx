
import React, { useState } from 'react';
import Alert from '../components/Alert/Alert';

export const AlertContext = React.createContext();

export default function AlertContextProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [config, setConfig] = useState({ type: 'success', text: '' });

  function openSuccessAlert(text, duration = null) {
    openAlert("success", text, duration);
  }

  function openDangerAlert(text, duration = null) {
    openAlert("danger", text, duration);
  }

  function openAlert(type, text, duration) {
    setOpen(true);
    setConfig({ type, text });

    if (duration) {
      setTimeout(() => {
        closeAlert();
      }, duration)
    }
  }

  function closeAlert() {
    setOpen(false);
  }

  return (
    <AlertContext.Provider value={{ openSuccessAlert, openDangerAlert, closeAlert }}>
      {children}
      {open && <Alert {...config} closeAlert={closeAlert} />}
    </AlertContext.Provider>
  );
}

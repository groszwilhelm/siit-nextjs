import { createPortal } from 'react-dom';

import './Dialog.css';

export default function Dialog({
  title,
  success,
  reject,
  dialogOpen,
  successButton,
  cancelButton,
}) {
  const dialogTemplate = (
    <>
      {dialogOpen && (
        <div className="dialog__backdrop">
          <section className="dialog">
            <h3>{title}</h3>

            <button onClick={success}>
              {successButton}
            </button>
            <button onClick={reject}>
              {cancelButton}
            </button>
          </section>
        </div>
      )}
    </>
  );

  return <>{createPortal(dialogTemplate, document.body)}</>;
}

import React from 'react';
import ReactDOM from 'react-dom';
import EditProductForm from '../EditProductForm';

const EditModal = ({ isEditing, hideEdit }) =>
  isEditing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hideEdit}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <EditProductForm></EditProductForm>
            </div>
          </div>
        </React.Fragment>,
        document.body,
      )
    : null;

export default EditModal;

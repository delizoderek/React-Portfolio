import React from "react";
import PropTypes from "prop-types";
import './Modal.scss'

const Modal = (props) => {
  const {
    isActive,
    title,
    width,
    children,
    footerNode,
    hideCloseButton,
    onClose,
    className,
    onMouseDown,
    onMouseUp,
    onTouchStart,
    onTouchEnd,
  } = props;

  if (!isActive) {
    return null;
  }

  return (
    <div
      className="root"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Backdrop */}
      <div className="backdrop" onClick={onClose}/>
      {/* Modal Container */}
      <div className="container">
        <div className="main" style={{ width: `${width}` }}>
          {/* Header Starts */}
          <div className="header">
            <div className="title">{title}</div>
            <div
              className={`close"${hideCloseButton ? 'hideButton' : ''}`}
              onClick={onClose}
            />
          </div>
          {/* Content Starts */}
          <div className="content">{children}</div>

        {/* Footer Starts */}
        {footerNode && <div className="footer">{footerNode}</div>}
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  footerNode: PropTypes.element,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string,
  width: PropTypes.number,
  onClose: PropTypes.func,
  hideCloseButton: PropTypes.bool,
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchEnd: PropTypes.func,
};

Modal.defaultProps ={
  width:600,
  title: "Modal",
};

export default Modal;
const Alert = ({message, type}) => {
    return (
      <div
        className={`alert ${type} alert-dismissible fade show my-2`}
        role="alert"
      >
        {message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    );
}

export default Alert
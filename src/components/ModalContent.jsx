const ModalContent = (props) => {
    const { launchData } = props;
  
    return launchData?.id && (
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">
            {launchData.name}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div
            id={`carousel${launchData.id}Controls`}
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={launchData.links?.patch?.large}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src={launchData.links?.patch?.small}
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href={`#carousel${launchData.id}Controls`}
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href={`#carousel${launchData.id}Controls`}
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
  
          <div className="row launchData-info">
            <div className="col-sm-4">
              <h4>Name</h4>
              <p>{launchData.name || ""} Feet</p>
            </div>
  
            <div className="col-sm-4">
              <h4>Details</h4>
              <p>{launchData.details || ""} Feet</p>
            </div>
            <div className="col-sm-4">
              <h4>Date</h4>
              <p>{launchData.date_local || ""} </p>
            </div>
            <div className="col-sm-4">
              <h4>Flight_No</h4>
              <p>{launchData.flight_number || ""} </p>
            </div>
            <div className="col-sm-4">
              <h4>Reused</h4>
              <p>{launchData?.cores?.reused ? `Yes` : `No`} </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalContent;
  
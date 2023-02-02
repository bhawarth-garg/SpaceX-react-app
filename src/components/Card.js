import { Component } from "react";
import Modal from  "./Modal";
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      launchData: {},
      openModal: false,
    };
  }

  render() {
    const topThreeLaunchIds = this.props.launchpad?.launches?.slice(0, 3) || [];

    const renderButton = topThreeLaunchIds?.map((id, index) => {
      return(<a
        className="btn btn-primary"
        onClick={() => {
          if (topThreeLaunchIds) {
            fetch(`https://api.spacexdata.com/v4/launches/${id}`)
              .then((response) => response.json())
              .then((data) => {
                this.setState({ launchData: data, openModal: true })
              })
          } else {
            alert("No Launches");
          }
        }}
        data-toggle="modal" 
        data-target={`#popup${id}`}
        href="#"
      >
        Launch - {index}
      </a>)});
    


    return (
      <>
        <div className="col-sm-6">
          <div className="card" key={this.props.launchpad.id}>
            <img
              src={this.props.launchpad.images.large}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.launchpad.name}</h5>
              <p className="card-text">
                Name: {this.props.launchpad.full_name}
              </p>
              <p className="card-text">Status: {this.props.launchpad.status}</p>
              <p className="card-text">
                Details: {this.props.launchpad.details}
              </p>

              {topThreeLaunchIds.length > 0 ? renderButton : <div />}
          </div>
        </div>
        </div>
        {this.state.openModal && <Modal isOpen={this.state.openModal} launchData={this.state.launchData} />}
      </>
    );
  }
}

export default Card;
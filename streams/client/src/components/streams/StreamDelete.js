import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import history from "../../history";
import Modal from "../modal";

class StreamDelete extends React.Component {
  renderAction() {
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.deleteStream(this.props.match.params.id);
          }}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    } else {
      return `Are you sure you want to delete the stream :${this.props.stream.title}?`;
    }
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderAction()}
        onDismiss={() => history.push("/")}
      ></Modal>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);

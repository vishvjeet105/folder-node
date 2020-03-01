import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import DisplayFile from "../DisplayFile";
// import './index.css';

class SubFolderNode extends React.Component {
  state = {
    isDisplayFile: false
  };
  subFolderHandle = () => {
    this.setState(prevState => ({
      isDisplayFile: !prevState.isDisplayFile
    }));
  };
  render() {
    const { isDisplayFile } = this.state;
    const { subFolderData, subFolderName } = this.props;
    return (
      <div className="sub-folder-node common-node">
        <div className="common-folder-title-box" onClick={this.subFolderHandle}>
          <div className={`${isDisplayFile ? "open-arrow" : "common-arrow"}`} />
          <div>
            <FontAwesomeIcon icon={faFolder} size="lg" />
          </div>
          <div>{subFolderName}</div>
        </div>
        <div className="folder-details-box">
          {isDisplayFile &&
            subFolderData.map(yearNode => {
              return <DisplayFile fileData={yearNode} />;
            })}
        </div>
      </div>
    );
  }
}
export default SubFolderNode;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import SubFolderNode from "../SubFolderNode";
import "../../styles/style.css";
import DisplayFile from "../DisplayFile";

class FolderNode extends React.Component {
  folderHandle = () => {
    this.props.hendleNumberToggle(this.props.folderName);
  };
  render() {
    const { folderData, folderName, folderToggle } = this.props;
    const isFile = Array.isArray(folderData);
    const keys = !isFile ? Object.keys(folderData) : folderData;
    return (
      <div className="folder-node common-node">
        <div className="common-folder-title-box" onClick={this.folderHandle}>
          <div className={`${folderToggle ? "open-arrow" : "common-arrow"}`} />
          <div>
            <FontAwesomeIcon icon={faFolder} size="lg" />
          </div>
          <div>{folderName}</div>
        </div>
        <div className="folder-details-box">
          {folderToggle && !isFile
            ? keys.map(subFolderNode => {
                return (
                  <SubFolderNode
                    subFolderData={folderData[subFolderNode]}
                    subFolderName={subFolderNode}
                  />
                );
              })
            : folderToggle && keys.map(file => <DisplayFile fileData={file} />)}
        </div>
      </div>
    );
  }
}
export default FolderNode;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import FolderNode from "../FolderNode";
import "../../styles/style.css";
import DisplayFile from "../DisplayFile";

class NumberNode extends React.Component {
  state = {
    folderToggle: false
  };
  numberFolderHandle = () => {
    this.setState({ folderToggle: false });
    this.props.hendleNumberToggle(this.props.num);
  };
  hendleNumberToggle = folderName => {
    this.setState(prevState => ({
      folderToggle: folderName === prevState.folderToggle ? false : folderName
    }));
  };
  render() {
    const { folderToggle } = this.state;
    const { numberData, num, numberToggle } = this.props;
    const isFile = Array.isArray(numberData);
    const keys = !isFile ? Object.keys(numberData) : numberData;

    return (
      <div className="number-node common-node">
        <div
          className="common-folder-title-box"
          onClick={this.numberFolderHandle}
        >
          <div className={`${numberToggle ? "open-arrow" : "common-arrow"}`} />
          <div>
            <FontAwesomeIcon icon={faFolder} size="lg" />
          </div>
          <div>{num}</div>
        </div>
        <div className="folder-details-box">
          {numberToggle && !isFile
            ? keys.map(folderNode => {
                return (
                  <FolderNode
                    folderData={numberData[folderNode]}
                    folderName={folderNode}
                    hendleNumberToggle={this.hendleNumberToggle}
                    folderToggle={folderToggle === folderNode ? true : false}
                  />
                );
              })
            : numberToggle && keys.map(file => <DisplayFile fileData={file} />)}
        </div>
      </div>
    );
  }
}
export default NumberNode;

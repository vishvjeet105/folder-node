import React from "react";
import axios from "axios";
import "../../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import YearNode from "../YearNode";
class RootNode extends React.Component {
  state = {
    folderNodeData: {},
    isOpenYear: false,
    yearToggle: false
  };
  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/bb7p0")
      .then(res => this.setState({ folderNodeData: res.data }))
      .catch(err => console.log(err));
  }
  rootFolderHandle = () => {
    this.setState(prevState => ({
      isOpenYear: !prevState.isOpenYear,
      yearToggle: false
    }));
  };
  hendleYearToggle = year => {
    this.setState(prevState => ({
      yearToggle: year === prevState.yearToggle ? false : year
    }));
  };
  render() {
    const { folderNodeData, isOpenYear, yearToggle } = this.state;
    let keys = Object.keys(folderNodeData);

    return (
      <div className="common-node">
        <div
          className="common-folder-title-box"
          onClick={this.rootFolderHandle}
        >
          <div className={`${isOpenYear ? "open-arrow" : "common-arrow "}`} />
          <div>
            <FontAwesomeIcon icon={faFolder} size="lg" />
          </div>
          <div>RootFolder ({Object.keys(folderNodeData).length})</div>
        </div>
        <div className="folder-details-box">
          {isOpenYear &&
            keys.map(yearNode => {
              return (
                <YearNode
                  yearData={folderNodeData[yearNode]}
                  year={yearNode}
                  hendleYearToggle={this.hendleYearToggle}
                  yearToggle={yearToggle === yearNode ? true : false}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
export default RootNode;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import DisplayFile from "../DisplayFile";
import NumberNode from "../NumberNode";
import "../../styles/style.css";

class MonthNode extends React.Component {
  state = {
    numberToggle: false
  };
  monthFolderHandle = () => {
    this.setState({ numberToggle: false });
    this.props.hendleMonthToggle(this.props.month);
  };
  hendleNumberToggle = num => {
    this.setState(prevState => ({
      numberToggle: num === prevState.numberToggle ? false : num
    }));
  };
  render() {
    const { numberToggle } = this.state;
    const { monthData, month, monthToggle } = this.props;
    const isFile = Array.isArray(monthData);
    const keys = !isFile ? Object.keys(monthData) : monthData;

    return (
      <div className="month-node common-node">
        <div
          className="common-folder-title-box"
          onClick={this.monthFolderHandle}
        >
          <div className={`${monthToggle ? "open-arrow" : "common-arrow"}`} />
          <div>
            <FontAwesomeIcon icon={faFolder} size="lg" />
          </div>
          <div>{month}</div>
        </div>
        <div className="folder-details-box">
          {monthToggle && !isFile
            ? keys.map(numNode => {
                return (
                  <NumberNode
                    numberData={monthData[numNode]}
                    num={numNode}
                    hendleNumberToggle={this.hendleNumberToggle}
                    numberToggle={numberToggle === numNode ? true : false}
                  />
                );
              })
            : monthToggle &&
              monthData.map(file => <DisplayFile fileData={file} />)}
        </div>
      </div>
    );
  }
}
export default MonthNode;

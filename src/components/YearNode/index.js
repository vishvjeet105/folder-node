import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import MonthNode from "../MonthNode";
import "../../styles/style.css";
import DisplayFile from "../DisplayFile";

class YearNode extends React.Component {
  state = {
    monthToggle: false
  };
  yearFolderHandle = () => {
    this.setState({ monthToggle: false });
    this.props.hendleYearToggle(this.props.year);
  };
  hendleMonthToggle = month => {
    this.setState(prevState => ({
      monthToggle: month === prevState.monthToggle ? false : month
    }));
  };
  render() {
    const { monthToggle } = this.state;
    const { yearData, yearToggle } = this.props;
    const isFile = Array.isArray(yearData);
    const keys = !isFile ? Object.keys(yearData) : yearData;

    return (
      <div className="common-node">
        <div
          className="common-folder-title-box"
          onClick={this.yearFolderHandle}
        >
          <div className={`${yearToggle ? "open-arrow" : "common-arrow"}`} />
          <div>
            <FontAwesomeIcon icon={faFolder} size="lg" />
          </div>
          <div>{this.props.year}</div>
        </div>
        <div className="folder-details-box">
          {yearToggle && !isFile
            ? keys.map(monthNode => {
                return (
                  <MonthNode
                    monthData={yearData[monthNode]}
                    month={monthNode}
                    hendleMonthToggle={this.hendleMonthToggle}
                    monthToggle={monthToggle === monthNode ? true : false}
                  />
                );
              })
            : yearToggle && keys.map(file => <DisplayFile fileData={file} />)}
        </div>
      </div>
    );
  }
}
export default YearNode;

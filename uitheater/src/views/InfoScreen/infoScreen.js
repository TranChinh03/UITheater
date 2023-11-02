import { useState } from "react";
import "./infoStyles.scss";
import InfoTabPanel from "../../components/InfoTabPanel/infoTabPanel";
function Info() {
  const [toggleState, setToggleState] = useState("2");
  const toggleTab = (index) => {
    setToggleState(index);
    console.log(index);
  };
  return (
    <div>
      <div className="Container">
        <div className="mainContainer">
          <div className="mainContainer_left">
            <InfoTabPanel toggleState={toggleState} onToggleTab={toggleTab}/>
          </div>
          <div className="mainContainer_right">
            <div className={toggleState === 1? "infoContainer active-content":"infoContainer"}>
            </div>
            <div className={toggleState === 2? "accountContainer active-content":"accountContainer"}>
            </div>
            <div className={toggleState === 3? "memberContainer active-content":"memberContainer"}>
            </div>
            <div className={toggleState === 4?"settingContainer active-content":"settingContainer"}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

import ConditionalRendering from "./ConditionalRendering";
import ListGroup from "./ListGroup";
import UseStateComponent from "./UseStateComponent";
import ProfileComponent from "./ProfileComponent";

import SampleComponent from './SampleComponent'
import SampleComponent2 from "./SampleComponent2.jsx";

function ProfileApp(){

  const name = "Denn"
  const age = 21

  return (
    <>
      
      {/* <ProfileComponent name="Denn" age={21} hobby="gaming"/>
      <UseStateComponent/>
      <ListGroup/>
      <ConditionalRendering isAdult={true}/> */}

      <SampleComponent/>
      <SampleComponent2/>
    </>



  );

}

export default ProfileApp
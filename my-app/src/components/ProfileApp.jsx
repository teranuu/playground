import ConditionalRendering from "./ConditionalRendering";
import ListGroup from "./ListGroup";
import UseStateComponent from "./UseStateComponent";
import ProfileComponent from "./ProfileComponent";



function ProfileApp(){

  const name = "Denn"
  const age = 21

  return (
    <>
      
      <ProfileComponent name="Denn" age={21} hobby="gaming"/>
      <UseStateComponent/>
      <ListGroup/>
      <ConditionalRendering isAdult={true}/>
    </>

  );

}

export default ProfileApp
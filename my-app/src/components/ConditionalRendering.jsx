

function ConditionalRendering({isAdult}){


    return(

        <>
            {isAdult ? <h1>I am an adult</h1> : <h1>I am a minor</h1>}
        </>


    );

}


export default ConditionalRendering
function ListGroup(){

        const list = [

            "Basketball",
            "Soccer",
            "Gaming",
            "Sleeping"

        ]

        

    return(
        <>
            <h1>My Hobbies</h1>
                <ul className="list-group">
                    {list.map(item => <li key={item}>{item}</li>)}
                </ul>
        </>
    )

}

export default ListGroup    
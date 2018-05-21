import * as React from "react";
import {Link} from "react-router";

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
                <h1>Administration site</h1>
                <p>This is some paragraph that I dont care for yet</p>
                <Link to = "about" className = "btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;
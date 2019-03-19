import React, {Component} from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import friends from "./friends.json"


class App extends Component {
    state = {
        friends,
    };

render(){
    return(
        <div>
        <Title></Title>
        {this.state.friends.map(friends => (
            <Card
                // shuffleScoreCard = {this.shuffleScoreCard}
                id={friends.id}
                key={friends.id}
                image={friends.image}
            />
                    ))}
        </div>
    )
}
}

export default App;
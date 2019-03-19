import React, {Component} from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper"


class App extends Component {
    state = {
        friends,
    };

render(){
    return(
        <div>
        <Title></Title>
        <Wrapper>
        {this.state.friends.map(friends => (
            <Card
                id={friends.id}
                key={friends.id}
                image={friends.image}
            />
                    ))}
                    </Wrapper>
        </div>
    )
}
}

export default App;
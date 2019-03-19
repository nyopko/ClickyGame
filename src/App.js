import React, {Component} from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper"


class App extends Component {
    state = {
        friends,
        clickedPics: [],
        score:0,
        goal: 9,
        status:"",
    };

    shufflePics = id => {
        let clickedPics = this.state.clickedPics;

        if(clickedPics.includes(id)){
            this.setState({clickedPics: [], score: 0, status: "You lose!"});
            return;
        } else{
            clickedPics.push(id)

            if(clickedPics.length === 9){
                this.setState({score: 9, status: "You win!", clickedPics: []})
                return;
            }
            this.setState({friends, clickedPics, score: clickedPics.length, status:""});

            for (let i = friends.length -1; i> 0; i--) {
                let j = Math.floor(Math.random() * (i+1));
                [friends[i], friends[j]] = [friends[j], friends[i]];
            }
        }
    }

render(){
    return(
        <div>
        <Title
        total={this.state.score}
        goal={9}
        status={this.state.status}
        />
        
        <Wrapper>
        {this.state.friends.map(friends => (
            <Card
            shufflePics = {this.shufflePics}
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
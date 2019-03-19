import React, { Component } from "react";
import Title from "./components/Title";
import Card from "./components/Card";
import friends from "./friends.json";
import Wrapper from "./components/Wrapper"


class App extends Component {
    state = {
        friends,
        clickedPics: [],
        score: 0,
        goal: 12,
        message: "",
    };

    shufflePics = id => {
        let clickedPics = this.state.clickedPics;

        if (clickedPics.includes(id)) {
            this.setState({ clickedPics: [], score: 0, message: "You lose!" });
            return;
        } else {
            clickedPics.push(id)

            if (clickedPics.length === 12) {
                this.setState({ score: 12, message: "You win! Click on another picture to play again!", clickedPics: [] })
                return;
            }
            this.setState({ friends, clickedPics, score: clickedPics.length, message: "" });

            for (let i = friends.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [friends[i], friends[j]] = [friends[j], friends[i]];
            }
        }
    }

    render() {
        return (
            <div>
                <Title
                    total={this.state.score}
                    goal={12}
                    message={this.state.message}
                />

                <Wrapper>
                    {this.state.friends.map(friends => (
                        <Card
                            shufflePics={this.shufflePics}
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
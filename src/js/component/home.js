import React from "react";
import { Game } from "./game.js";
import { Modal } from "./modal.js";

//Modal Form requests Player Names for 'X' & 'O'.
//Take Player Names and store them
//Choose turn order
//Disappear and start game

//Start Game
//Empty all divs
//Start First Turn based on turn order chosen
//on click, change div content to 'X' or 'O' depending on turn.
// Only empty Divs can be clicked, can't turn 'X' into 'O'.
// Check if they Won
// If no winner, start Next Turn
// If winner, declare the winner, tell them to push reset button

//Reset Button
//Clears player names, ask for first player turn

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			player: "",
			winner: "",
			message: "Hit Start to Play"
		};
	}
	setTurn = (symbol, player1, player2) => {
		this.setState({ player: symbol });
		this.setState({
			message: symbol == "o" ? "o's Turn" : "x's Turn"
		});
		this.setState({ winner: "" });
		//this sets the player with the value from modal. also sets symbol of first turn
	};
	nextTurn = player => {
		if (this.state.winner == "") {
			this.setState({ player: this.state.player == "x" ? "o" : "x" });
			this.showTurn(player);
		}
	};
	setWinner = player => {
		this.setState({ winner: player });
		this.showWinner(player);
	};

	showTurn = player => {
		this.setState({
			message: this.state.player == "o" ? "x's Turn" : "o's Turn"
		});
	};
	showWinner = player => {
		this.setState({ message: this.state.player + " Has Won!" });
	};

	render() {
		return (
			<div>
				<Modal onSetTurn={this.setTurn} />{" "}
				<Game
					prop2={this.nextTurn}
					prop3={this.setWinner}
					currentPlayer={this.state.player}
					prop4={this.state.message}
					propWinner={this.state.winner}
					//this comes from state
				/>
			</div>
		);
	}
}

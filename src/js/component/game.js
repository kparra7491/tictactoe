import React from "react";
import PropTypes from "prop-types";
//include images into your bundle

//create your first component
export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			board: ["", "", "", "", "", "", "", "", ""]
		};
	}

	updateNextMove = index => {
		if (this.props.propWinner == "") {
			var updatedBoard = this.state.board.map((piece, i) => {
				return index == i && piece == ""
					? this.props.currentPlayer
					: piece;
			});

			this.setState({ board: updatedBoard });
			this.props.prop2();

			this.checkWin(updatedBoard);
			if (this.props.currentPlayer == "") this.emptyBoard();
			if (!updatedBoard.includes("")) {
				this.emptyBoard();
			}
		}
	};
	checkWin = board => {
		var winners = [
			[1, 1, 1, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 1, 1, 1, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 1, 1, 1],
			[1, 0, 0, 1, 0, 0, 1, 0, 0],
			[0, 1, 0, 0, 1, 0, 0, 1, 0],
			[0, 0, 1, 0, 0, 1, 0, 0, 1],
			[1, 0, 0, 0, 1, 0, 0, 0, 1],
			[0, 0, 1, 0, 1, 0, 1, 0, 0]
		];
		var winner = "";

		winners.forEach(winningCombo => {
			var counter = 0;
			for (let i = 0; i < winningCombo.length; i++) {
				if (winningCombo[i] == 1) {
					if (board[i] == this.props.currentPlayer) {
						counter++;

						if (counter > 2) {
							this.props.prop3(this.props.currentPlayer);
							this.emptyBoard();
						}
					}
				}
			}
		});
	};

	emptyBoard = () => {
		this.setState({ board: ["", "", "", "", "", "", "", "", ""] });
	};

	render() {
		return (
			<div className="container p-0">
				<div className="row p-0">
					<div
						className={"col p-0 square " + this.state.board[0]}
						id="0"
						onClick={() => this.updateNextMove(0)}>
						{this.state.board[0].toUpperCase()}
					</div>
					<div
						className={
							"col p-0 square midcol " + this.state.board[1]
						}
						id="1"
						onClick={() => this.updateNextMove(1)}>
						{this.state.board[1]}
					</div>
					<div
						className={"col p-0 square " + this.state.board[2]}
						id="2"
						onClick={() => this.updateNextMove(2)}>
						{this.state.board[2]}
					</div>
				</div>
				<div className="row p-0 midrow">
					<div
						className={"col p-0 square " + this.state.board[3]}
						id="3"
						onClick={() => this.updateNextMove(3)}>
						{this.state.board[3]}
					</div>
					<div
						className={
							"col p-0 square midcol " + this.state.board[4]
						}
						id="4"
						onClick={() => this.updateNextMove(4)}>
						{this.state.board[4]}
					</div>
					<div
						className={"col p-0 square " + this.state.board[5]}
						id="5"
						onClick={() => this.updateNextMove(5)}>
						{this.state.board[5]}
					</div>
				</div>
				<div className="row p-0 ">
					<div
						className={"col p-0 square " + this.state.board[6]}
						id="6"
						onClick={() => this.updateNextMove(6)}>
						{this.state.board[6]}
					</div>
					<div
						className={
							"col p-0 square midcol " + this.state.board[7]
						}
						id="7"
						onClick={() => this.updateNextMove(7)}>
						{this.state.board[7]}
					</div>
					<div
						className={"col p-0 square " + this.state.board[8]}
						id="8"
						onClick={() => this.updateNextMove(8)}>
						{this.state.board[8]}
					</div>
				</div>
			</div>
		);
	}
}

Game.propTypes = {
	currentPlayer: PropTypes.string,
	prop2: PropTypes.func,
	prop3: PropTypes.func,
	prop4: PropTypes.string,
	propWinner: PropTypes.string,
	propReset: PropTypes.func
};

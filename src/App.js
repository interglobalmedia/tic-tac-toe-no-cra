import React, { Component } from 'react';
import Board from './components/Board';
import {CalculateWinner} from './components/CalculateWinner';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber : 0,
            xIsNext: true
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0, 
            this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (CalculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        })
    }
    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = CalculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
            `Go to move # ${move}`:
            `Go to game start`;
            return (
                <li key={move}>
                    <button className="btn" onClick={() => this.jumpTo(move)}>
                    {desc}
                    </button>
                </li>
            )
        })

        let status;
        if(winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }

        return (
            <div className="Site">
                <div className="Site-content">
                    <h1 className="game-title">Tic Tac Toe</h1>
                    <div className="game">
                        <div className="game-board">
                            <Board
                                squares={current.squares}
                                onClick={i => this.handleClick(i)} />
                        </div>
                    </div>
                    <div className="game-info">
                        <div className="status">{status}</div>
                        <ol>{moves}</ol>
                    </div>
                </div>
                <div className="footer-container">
                    <footer className="site-footer">
                        <p className="identity">© 2018 Maria D. Campbell</p>
                    </footer>
                </div>
            </div>
        )
    }
}

export default App;
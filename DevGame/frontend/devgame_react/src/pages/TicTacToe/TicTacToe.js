import './TicTacToe.css';
import { useState } from 'react';

function Board({board, clickButton, gameEnded}){
    return (
        <>
            <div className='board-row'>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(0)}>{board[0]}</button>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(1)}>{board[1]}</button>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(2)}>{board[2]}</button>
            </div>
            <div className='board-row'>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(3)}>{board[3]}</button>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(4)}>{board[4]}</button>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(5)}>{board[5]}</button>
            </div>
            <div className='board-row'>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(6)}>{board[6]}</button>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(7)}>{board[7]}</button>
                <button className="square" disabled={gameEnded} onClick={() => clickButton(8)}>{board[8]}</button>
            </div>
        </>
    );
}

function GameState({cur_player, validate}){
    let {end, winner} = validate();
    console.log(end);
    console.log(winner);
    if(end && winner === "X") return <h3 style={{textAlign:'center'}}>Congratz X!</h3>
    if(end && winner === "O") return <h3 style={{textAlign:'center'}}>Congratz O!</h3>
    if(end && winner === "draw") return <h3 style={{textAlign:'center'}}>It's a Draw!</h3>
    return <h3 style={{textAlign:'center'}}>Current Player: {cur_player}</h3>;
}
function TicTacToe(){
    const [turnNumber, setTurnNumber] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [board, setBoard] = useState(Array(9).fill(" "));
    const current_player = turnNumber % 2 === 0 ? "X": "O";
    const addTurn = () => setTurnNumber(turnNumber+1);

    const resetBoard = (id) => {
        setTurnNumber(0);
        setBoard(Array(9).fill(" "));
        setGameEnded(false);
        console.log("reset");
    };

    const validate = () => {
        const check = (player) => {
            if(board[0]===player && board[1]===player && board[2]===player){setGameEnded(true); return true;}
            if(board[3]===player && board[4]===player && board[5]===player){setGameEnded(true); return true;}
            if(board[6]===player && board[7]===player && board[8]===player){setGameEnded(true); return true;}

            if(board[0]===player && board[3]===player && board[6]===player){setGameEnded(true); return true;}
            if(board[1]===player && board[4]===player && board[7]===player){setGameEnded(true); return true;}
            if(board[2]===player && board[5]===player && board[8]===player){setGameEnded(true); return true;}

            if(board[0]===player && board[4]===player && board[8]===player){setGameEnded(true); return true;}
            if(board[2]===player && board[4]===player && board[6]===player){setGameEnded(true); return true;}

            return false;
        }
        if(check("X")) return {end: true, winner: "X"};
        if(check("O")) return {end: true, winner: "O"};
        if(turnNumber > 8) return {end: true, winner: "draw"};
        return {end: false, winner: ""};
    }

    const clickButton = (id) => {
        if(id > 8 || id < 0) return; // id out of bounds
        if(board[id] !== " ") return; // Field already filled
        board[id] = current_player;
        setBoard(board);
        addTurn();
    }
    
    return (
        <>
            <GameState cur_player={current_player} validate={validate} />
            <Board board={board} clickButton={clickButton} gameEnded={gameEnded}/>
            <div className='reset-button'><button onClick={resetBoard}>Reset</button></div>
        </>
    );
}
export default TicTacToe;
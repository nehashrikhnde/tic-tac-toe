import{useState} from "react";
import Card from "../Card/Card";
import isWinner from '../../helper/checkWinner';


function Grid({numberofcards}){
const [board,setBoard]=userState(Array(numberofaCard).fill(""));
const [turn,setTurn]=useState(true);
const [winner,setWinner]=useState(null);

  function play(index){
if (turn == true) {
    board[index]="o";
}else{
    board[index]="X";
}
const win = isWinner(board,turn?"o":"X")
if (win) {
    setWinner(win);
}
setBoard([...board]);
setTurn(!turn);
  }
  function reset(){
    setTurn(true);
    setWinner(null)
    setBoard(array(numberofcards).fill(""))
  }

 return(
 <div className="grid-wrapper">
    {
        winner &&(
            <>
            <h1 className ="turn-highlight">winner is {winner}</h1>
            <button className="reset" onClick={reset}>reset game</button>
            </>
        )
    }
    <h1 className="turn-highlight">current turn:{(true)?'o':'X'}</h1>

<div className="grid">
{board.map((el,idx)=><card gameEnd={winner? true:false} key={idx} onplay={play} player={el} index={idx}/>)}
</div>
</div>
 )

 

}


export default Grid;
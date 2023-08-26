import Icon from '../Icon/Icon';
import './card.css';
function card({gameEnd,player, onPlay,index}){
    let icon = <icon/>
if (player =='X') {
    icon =<Icon name="cross"/>
}else if(player =='0'){
    icon = <icon name="circle"/>
}

function reset(){
    setTurner(true);
    setTurner(null);
    setBoard()
}
    return(
        <div className='card'onClick={()=>!gameEnd &&onPlay(index)}>
          {icon}
        </div>
    )

    
}
export default Card
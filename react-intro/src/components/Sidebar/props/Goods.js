import style from './Goods.module.css'
function Goods(props){
    return (
        <div className="block">
            <img src={props.image} alt="" className={style.image} ></img>
            <div className={style.card}>
            <h3 className={style.price}>{props.cost}</h3>
            <h5 className={style.cost1}>{props.cost1}</h5>
            </div>
            <h4 className={style.name}>{props.title}</h4>
            <button className={style.button}>{props.button}</button>
        </div>
    )
}
export default Goods ;
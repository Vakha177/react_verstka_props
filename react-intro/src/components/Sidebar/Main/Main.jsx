import Goods from "../props/Goods"
import style from '../props/Goods.module.css'
  function Main() {
    const goods = [
        {'image': 'https://hi-stores.ru/upload/iblock/d4f/d4fd5c90f97d30697e3557d2a6aebba2.jpg' ,'cost': '97000₽' , 'title':'Mackbook' , 'button':'Купить', 'cost1': '60000'},
        {'image': 'https://storage.yandexcloud.net/the-istore.ru-backup/iblock/f5b/f5bd83bcdfbc46b791699739909441e7/1ccbb17cec4a9028ea7d8f4248df61dc.jpeg' ,'cost': '56000₽' , 'title':'Iphone 13','button':'В корзине','cost1': '76844'},
        {'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVGjHw1B1S5PexM91GDdXILadS6lsMYMpjw&usqp=CAU' ,'cost': '150000₽' , 'title':'Scooter','button':'Нет в наличии', 'cost1': '799000'},
        {'image': 'https://s16.stc.all.kpcdn.net/expert/wp-content/uploads/2021/12/tild6365-6139-4336-b738-666635613663__5_2-960x540.png' ,'cost': '97000₽' , 'title':'Plastation5' , 'button':'Купить','cost1': '34000'},
        {'image': 'https://popadiv10.ru/image/catalog/product/3275/shp-avtomat-kalashnikova-os-ak-74m-oholoshchennyy-10.jpg' ,'cost': '56000₽' , 'title':'Ak-74','button':'В корзине', 'cost1': '76000'},
        {'image': 'https://grozmer.ru/images/photos/medium/article167.jpg' ,'cost': '150000₽' , 'title':'Грозный','button':'Купить' , 'cost1': '170000'},
      ]
    
    return(
        <div className={style.contayner}>
             {goods.map(item =><Goods image={item.image} cost={item.cost} title={item.title} button={item.button} cost1={item.cost1}/> )}
        </div>
    )
  }

  export default Main
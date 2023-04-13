// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
//
//
//
// =====
// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
//
//
// #Advance
//
// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
// пости мають виводитись під компонетою Users (в App компоненті)




import Posts from "./components/posts/Posts";
import FullPost from "./components/fullPost/fullPost";
import {useState} from "react";

const App = () => {

    let [chosenPost, setChosenPost] = useState(null);

    const lift =(obj) => {
        setChosenPost({...obj});
    }

  return (
    <div className={'container'}>


        <div className={'left-side'}>
            <Posts lift = {lift}/>

        </div>


        {
            chosenPost
            &&
            (<div className={'right-side'}>
                <FullPost value={chosenPost}/>
            </div>)
        }



    </div>
  );
}

export default App;

import Rickandmorty from "../rickandmorty/rickandmorty";
function Rickandmortys({items:rickandmortys}) {



    return (
        <div>

            {
                rickandmortys.map(value => (<Rickandmorty item={value} key={value.id}/>))
            }

        </div>
    );
}

export default Rickandmortys
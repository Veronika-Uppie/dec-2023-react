const Simpson = ({item}) => {
    return (
        <div>
            <div>{item.name} {item.surname}</div>
            <div>{item.age} років</div>
            <div>{item.info}</div>

            {/*<img src="${value.photo}" alt="${value.name}">*/}
            <div> .</div>
        </div>
    );

}

export default Simpson;
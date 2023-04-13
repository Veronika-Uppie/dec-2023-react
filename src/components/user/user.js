import React from 'react';

const User = ({user, setUserId}) => {
    return (
        <div>
            <p>
                {user.id}
                name: {user.name} ,
                username:  {user.username}
                email: {user.email}
                address:
                street:{user.address.street}
                suite:{user.address.suite}
                city: {user.address.city}
                zipcode: {user.address.zipcode}
                geo:
                lat: {user.address.geo.lat}
                lng: {user.address.geo.lng}
                phone: {user.phone}
                website:{user.website}
                company:
                name: {user.company.name}
                catchPhrase: {user.company.catchPhrase}
                bs: {user.company.bs}
                <button onClick={() =>
                    setUserId(user.id)
                }>show posts</button>
            </p>
        </div>
    );
};

export default User;
import React from 'react';

const Flight = ({value}) => {
    if (value.launch_year !== "2020"){

        return (
            <div>
                {
                    <p>
                        mission_name : {value.mission_name} ,
                        launch_year: {value.launch_year}
                        <img src={value.links.mission_patch} alt={value.mission_name}/>
                    </p>
                }


            </div>
        );
    }
};

export default Flight;
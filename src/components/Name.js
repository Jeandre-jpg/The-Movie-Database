import React, {useState}from 'react';

export const Name = () => {
    const[name, setName] = useState("Jeandre")
    return(
        <div>
            {name}
        </div>
    )
}

import React from 'react';

export const Surname = () => {
    return(
        <div>
            De Villiers
        </div>
    )
}
import React from 'react';








const Header = (()=> {

    return(
        <div>
            <h2>
                Today's Date: {new Date().toLocaleString("en-US", { day : '2-digit'})} {new Date().toLocaleString("en-US", { month: "long" })}
                <br/>


            </h2>
        </div>
    )
})

export default Header;
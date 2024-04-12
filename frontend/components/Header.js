import React from "react";

const Header = (props) => {
    const data = props
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(data.data.date)
    console.log(data.data)
    let month = months[date.getMonth()]
    

    return (
        <div>
        <h1>
        Astronomy Picture of the Day
        </h1>
        <h4>
        <a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a> 
        Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
        </h4>
        <h4>
            {date.getFullYear()} {month} {date.getUTCDate()}
        </h4>
        </div>
    )
}


export default Header
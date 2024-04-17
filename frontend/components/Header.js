import React, {useState} from 'react'
import styled from "styled-components";

const StyledHeader = styled.div`
h1 {
    text-align: center
}
h4 {
    text-align: center;
    padding-top: 8px;
    
    
}
.date{
        font-style:italic
    }

`

const Header = (props) => {
    const [style, setStyle] = useState('')
    const data = props
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date(data.data.date)
    console.log(data.data)
    let month = months[date.getMonth()]
    

    return (
        <StyledHeader>
        <h1>
        Astronomy Picture of the Day
        </h1>
        <h4>
        <a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a> 
        Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
        </h4>
        <h4 className='date'>
            {date.getFullYear()} {month} {date.getUTCDate()}
        </h4>
        </StyledHeader>
    )
}


export default Header
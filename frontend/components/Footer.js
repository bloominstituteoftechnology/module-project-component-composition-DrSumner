import React from "react";
import styled from "styled-components";


const StyledFooter = styled.div`

h4{
    text-align:center;
    padding-bottom:2px
}
p{
    padding-left:1cm;
    
    
}
img{
    display:flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    margin: auto;
    
    
}
`


const Footer = (props) => {
    const data = props
    const exp = data.data.explanation
    const title = data.data.title
    const img = data.data.url
    //console.log(data.data)

    return (
        <StyledFooter>
            <img
          alt='Photo of the day'
          className='post-image'
          src={img}
        />
        <h4>
            {title}
        </h4>
        <h4>
        Image Credit & Copyright: {data.data.copyright} 
        </h4>
        <p>
            Explanation: {exp}
        </p>
        </StyledFooter>
    )
}

export default Footer
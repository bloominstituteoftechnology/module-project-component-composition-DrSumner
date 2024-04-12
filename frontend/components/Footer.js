import React from "react";

const Footer = (props) => {
    const data = props
    const exp = data.data.explanation
    const title = data.data.title
    const img = data.data.url
    //console.log(data.data)

    return (
        <div>
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
            explanation: {exp}
        </p>
        </div>
    )
}

export default Footer
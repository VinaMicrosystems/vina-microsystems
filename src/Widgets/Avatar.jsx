import React from 'react'

const Style = {
    display: 'flex',
    paddingTop: '7px',
    flexDirection: 'column'
}
const Avatar = ({ url, details, name }) => (
    <div className="headshot">
        <div className="header">
            <img src={url} alt="" srcSet="" />
        </div>

        <div className="text-align-center" style={Style}>

            <span className="text-align-center">{name}</span>
            <p>{details}<br /></p>
        </div>
    </div>
)
export default Avatar
import React from 'react'



const Tag = ({ message, code }) => (
    <div className="err-code text-align-center">
        <h3>{code}</h3>
        <span>{message}</span>
    </div>
)

const Error = ({ children }) => (
    <div className="unavailable">
        {children}
    </div>
)

export { Error, Tag }
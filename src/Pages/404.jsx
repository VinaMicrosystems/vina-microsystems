import React from 'react'
import { Error, Tag } from '../Widgets/Error'
import Nav from '../Widgets/Nav'

const metadata = {
    message: 'Page Not Available',
    code: 404
}

const NotFound = () => (
    <Error>
        <Nav/>
        <Tag {...metadata} />

    </Error>
)

export default NotFound
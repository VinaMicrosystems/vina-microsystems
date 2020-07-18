import React from 'react'
import { Error, Tag } from '../Widgets/Error'
import Nav from '../Widgets/Nav'

const metadata = {
    message: 'Hold tight! cool stuff coming up',

}

const Blog = () => (
    <Error>
        <Nav />
        <Tag {...metadata} />

    </Error>
)
export default Blog
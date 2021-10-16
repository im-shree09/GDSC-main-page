import React from 'react'
import Banner from '../components/Banner/Banner'
import Comments from '../components/comments/Comments'
import Nav from '../components/nav/nav'

const MainPage = () => {
    return (
        <div>
        <Nav/>
        <Banner/>
            <Comments
                ommentsUrl="http://localhost:3004/comments"
        currentUserId="1"
            />
        </div>
    )
}

export default MainPage

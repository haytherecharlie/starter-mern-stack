/*******************************************
 * © Charlie Hay
 * ---------------------
 * Home
 ******************************************/
import React from 'react'
import PageHeader from '../../elements/PageHeader/PageHeader'
import './style.scss'

/*******************************************
 * React Function
 ******************************************/
function Home(props) {
    return (
        <div className="home__wrapper">
            <PageHeader />
        </div>
    )
}

/*******************************************
 * Export Default Function
 ******************************************/
export default Home
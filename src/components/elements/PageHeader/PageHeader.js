/*******************************************
 * © Charlie Hay
 * ---------------------
 * PageHeader
 ******************************************/
import React from 'react'
import './style.scss'

/*******************************************
 * React Function
 ******************************************/
function PageHeader(props) {
    return (
        <div className="page-header__wrapper">
            <div className="page-header__logo">
                <span className="page-header__the-dev">the_dev</span>
                <span className="page-header__environment">.environment</span>
            </div>
        </div>
    )
}

/*******************************************
 * Export Default Function
 ******************************************/
export default PageHeader
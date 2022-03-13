import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function NavBar() {

    const { navPills } = useSelector(state => state.appStateReducer);
    /**
     * Use useEffect to add active class when initialise the component (entire page)
     * useEffect replace componentDidMount lifeCycle
     */
    useEffect(()=>{
       // console.log("abc");
        document.querySelector(".nav-link").classList.add("active");
    },[])
    // console.log("navPill",navPills)
    const renderNavbar = () => {
        return navPills.map((navItem, index) => {
            return <li className='nav-item' key={index}>
                <a className="nav-link" data-toggle="pill" href={"#" + navItem.tabName}>{navItem.showName}</a>
            </li>
        })
    }
    return (
        <React.Fragment>
            <ul className="nav nav-pills">
                {renderNavbar()}
            </ul>
        </React.Fragment>
    )
    
}

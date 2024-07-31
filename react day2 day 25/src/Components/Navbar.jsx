


function Navbar(props) {
    console.log(props)
    return (
        <nav>
            <ul>
                <li><a href="#">{props.first}</a></li>
                <li><a href="#">{props.second}</a></li>
                <li><a href="#">{props.third}</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
import React from "react";
import * as BootStrap from "react-bootstrap";

class Navbar extends React.Component {
    render() {
        return (
            <BootStrap.Navbar expand="lg" variant="dark" bg="dark">
                <BootStrap.Container>
                    <BootStrap.Navbar.Brand href="#">glitchy-planner</BootStrap.Navbar.Brand>
                </BootStrap.Container>
            </BootStrap.Navbar>
        )
    }
}

export default Navbar;
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'

export default function Nav() {
    return (
        <div style={{marginBottom: '40px'}}>
            <Navbar expand="lg" variant="light" bg="primary">
                <div>
                    <Navbar.Brand href="#">POKEMON</Navbar.Brand>
                </div>
            </Navbar>
        </div>
    )
}

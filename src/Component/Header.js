import React, { Component } from 'react'

function Header(props) {
        return (
            <div>
                <header>
                    <div>
                        <div className='headlefft'>SA-INTRANET</div>
                        <div className='headright1'>support@squashapps.com</div>
                        <div className='aboveimg'>
                            <img src='./img/email.png' className='classimg'/>
                        </div>
                        {props.frommain &&
                            <div className='headright2'>Login</div>
                        }
                    </div>
                </header>
            </div>
        )
}

export default Header

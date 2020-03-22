import React, { Component } from 'react'

function Header(props) {
    let redirecttolog=()=>{
        window.location.href='/Login'
    }
        return (
            <div>
                <header>
                    <div>
                        <div className='headlefft'>SA-INTRANET</div>
                        {!props.fromlogin &&
                            <div className='headright1'>support@squashapps.com</div>
                        }
                        {!props.fromlogin &&
                            <div className='aboveimg'>
                                <img src='./img/email.png' className='classimg'/>
                            </div>
                        }
                        {props.frommain &&
                           <a onClick={()=>redirecttolog()}><div className='headright2'>Login</div></a> 
                        }
                        {props.fromlogin &&
                           <a onClick={()=>redirecttolog()}>
                               <div>
                                    <button className='headright3'>Getting Started</button>
                               </div>
                           </a> 
                        }
                    </div>
                </header>
            </div>
        )
}

export default Header

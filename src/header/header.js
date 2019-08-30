import React from 'react'

function Header(props) {
    return (
        <div>
            <input type='date' value={props.date} onChange={(e) => props.setData({date: e.target.value})}/>
            <h1 className='tile'>{props.title}</h1>
        </div>
    )
}

export default Header
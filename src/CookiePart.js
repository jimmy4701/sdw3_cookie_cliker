import React, {useState} from 'react'

const CookiePart = () => {
    const [cookie_counter, setCookieCounter] = useState(0)

    const addCookie = () => {
        setCookieCounter(cookie_counter + 1)
    }

    const removeCookie = () => {
        if(cookie_counter >= 1){
            setCookieCounter(cookie_counter - 1)
        }
    }

    return <div>
        <p>Nombre de cookies : {cookie_counter}</p>
        <p>Cookies par seconde: 0</p>
        <p onClick={removeCookie}>Manger un cookie</p>
        <img 
            src="https://image.flaticon.com/icons/png/512/614/614131.png"
            alt="big cookie"
            onClick={addCookie}
        />
    </div>
}

export default CookiePart
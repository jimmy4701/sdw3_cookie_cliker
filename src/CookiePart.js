import React, {useState} from 'react'

const CookiePart = () => {
    const [cookie_counter, setCookieCounter] = useState(10)

    const addCookie = () => {
        setCookieCounter(cookie_counter + 1)
    }

    return <div>
        <p>Nombre de cookies : {cookie_counter}</p>
        <p>Cookies par seconde: 0</p>
        <img 
            src="https://image.flaticon.com/icons/png/512/614/614131.png"
            onClick={addCookie}
        />
    </div>
}

export default CookiePart
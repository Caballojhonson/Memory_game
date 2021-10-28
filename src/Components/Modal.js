import React, {useState} from 'react'

export default function Modal() {
    const [modalDisplay, setModalDisplay] = useState({})

    const hideModal = () => {
        setModalDisplay({display: "none"})
    }

    return (
        <div className="modal__background" onClick={hideModal} style={modalDisplay}>
            <div className="modal">
                <h1>Welcome!</h1>
                <p>Never click on the same kitten!</p>
                <p>If you don't like your kittens just refresh the page. </p>
                <h5>Good Luck...</h5>
            </div>
        </div>
    )
}

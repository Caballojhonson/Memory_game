import React, {useState, useEffect, useRef} from 'react'

export default function Retry(props) {
    const [modalDisplay, setModalDisplay] = useState({display: 'none'})

    const hideModal = () => {
        setModalDisplay({display: "none"})
    }
    const mounted = useRef(false)
    useEffect(() => {
       mounted.current ? setModalDisplay({display: 'flex'}) : mounted.current = true

    }, [props.scores])
    

    return (
        <div className="modal__background" onClick={hideModal} style={modalDisplay}>
            <div className="modal">
                <h1>You failed!</h1>
                <p>Click anywhere to replay or refresh the page for new cats</p>
            </div>
        </div>
    )
}

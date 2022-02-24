import React, { Component } from 'react'
import { Images } from '../../../assets'

export const UserView = (props) => {

    const {
        img,
        price,
        price2,
        name
    } = props

    return (
        <div style={{ height: '50px', width: '50px' }}>
            <div style={{
                ...styles.main,
                backgroundImage: `url(${img})`
            }}>
                <div style={styles.dollarImg} >
                    <div style={{
                        height: '100%', width: '100%',
                        backgroundColor: '#579FFF',
                        borderRadius: '100%',
                        display: 'flex',
                        justifyContent: "center",
                        alignItems: 'center'
                    }}>
                        <p style={{ fontWeight: 'bold', fontSize: '10px', color: '#fff' }}>${price2}</p>

                    </div>

                </div>
                <div style={styles.starMainView}>
                    <img style={{ height: '15px', width: '15px', }} src={Images.star} />
                    <p style={{ fontWeight: 'bold', fontSize: '12px' }}>${price}</p>
                </div>
            </div>
            <p style={{ margin: 0, fontWeight: 'bold', textAlign: 'center' }}>{name}</p>
        </div>
    )
}

const styles = {
    main: {
        height: '100%',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        position: 'relative'
    },
    dollarImg: {
        height: '20px',
        width: '20px',
        right: -5,
        position: 'absolute',
    },
    starMainView: {
        border: '1px solid #000',
        height: '20px',
        width: '50px',
        borderRadius: '20px',
        display: 'flex',
        position: 'absolute',
        left: -40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    }
}
import React from 'react'
import avatar from '/src/images/user.png'
import starFilled from '/src/images/starFilled.png'
import starEmpty from '/src/images/starEmpty.png'

export default function StateObject(){

    const [contact,setContact] = React.useState({
        firstName : "Ness",
        lastName : "DOE",
        phone :" +213 789876888",
        email : "itsmereal@gmail.com",
        isFavorite : false
    })



    function toggleFavorite(){
        setContact(prevContact => {
            return{
                ...prevContact ,
                isFavorite : !prevContact.isFavorite
            }
        })
        
    }
    
    let startIcon = contact.isFavorite ? starFilled : starEmpty
    
    return(
        <>
            <article className="card">

                        <img

                        src={avatar}

                        className="avatar"

                        alt="User profile picture of John Doe"
                        width="100px"
                        />

                    <div className="info">

                        <button

                        onClick={toggleFavorite}

                        aria-pressed={contact.isFavorite}

                        aria-label={contact.isFavorite === true ? "add to favorite" : "remove from favorite"}

                        className="favorite-button">

                            <img

                            src={startIcon}

                            alt="empty star icon"

                            className="favorite"
                            width= "20px"
                            />

                        </button>

                <h2 className="name">

                    {`${contact.firstName} ${contact.lastName}`}

                </h2>

                <p className="contact">{contact.phone}</p>

                <p className="contact">{contact.email}</p>

                </div>

            </article>
        </>
        )
    
    
}

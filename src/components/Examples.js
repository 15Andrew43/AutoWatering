import React from 'react'


export default function Examples() {
    let photos = []

    for (let i = 1; i < 19; ++i) {
        photos.push("img/examples/"+i+".jpg")
    }
    console.log(photos)

    return (
        <div className="photos">
            {photos.map(photo => {
                return <img className="photos-photo" src={photo} alt=""></img>
            })}
        </div>
    )
}
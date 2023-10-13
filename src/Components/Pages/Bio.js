import React from 'react'
import {SideBar} from '../SideBar'
import profileImage from '../../images/Sandile-1_AI Anime.jpg'
import '../Pages/Bio.css'

export const Bio = () => {
    return(
        <div className={"bio__portfolio__page"}>
            <SideBar />
            <div className={'bio__img__and__header'}>
            <h1>The Journey</h1>
            <img className={'react__bio__image'} alt={"profile"} src={profileImage} />
                <p className={'first__bio__paragraph'}>
                    In Spitfire, my journey began as an <strong><em>Inbound Implementer</em></strong>,<br />
                    role that placed me at the heart of the company's marketing strategy.<br />
                    As an Inbound Implementer, I found myself immersed<br />
                    in a world of creativity and strategy,<br />
                    tasked with various responsibilities to drive the success of our inbound marketing efforts.
                </p>

                <p className={'second__bio__paragraph'}>
                    <strong>Responsibilities:</strong><br />
                    <strong><em>Mailers:</em></strong> One of my primary duties was to create and manage mailers.<br />
                    This involved designing visually appealing email templates,<br />
                    <strong><em>Social Media Content Scheduling:</em></strong> I was responsible for our organization's social media presence.<br />
                    <strong><em>Maintaining Website Pages:</em></strong> I took care of maintaining and updating our website pages using front-end tools on Hubspot.
                </p>

                <p className={'third__bio__paragraph'}>
                    <strong>Responsibilities:</strong><br />
                    <strong><em>Mailers:</em></strong> One of my primary duties was to create and manage mailers.<br />
                    This involved designing visually appealing email templates,<br />
                    <strong><em>Social Media Content Scheduling:</em></strong> I was responsible for our organization's social media presence.<br />
                    <strong><em>Maintaining Website Pages:</em></strong> I took care of maintaining and updating our website pages using front-end tools on Hubspot.
                </p>

                <p className={'fourth__bio__paragraph'}>
                    <strong>Responsibilities:</strong><br />
                    <strong><em>Mailers:</em></strong> One of my primary duties was to create and manage mailers.<br />
                    This involved designing visually appealing email templates,<br />
                    <strong><em>Social Media Content Scheduling:</em></strong> I was responsible for our organization's social media presence.<br />
                </p>


            </div>
        </div>
    )
}
import './Home.css'
import {SideBar} from "../SideBar";
import profileImage from '../../images/Sandile-1_AI Anime.jpg'

export const Home = () =>{
    return(

        <div className={"home__portfolio__page"}>
            <SideBar />
            <div className={'home__img__and__header'}>
                <img className={'react__profile__image'} alt={"profile"} src={profileImage} />
                <h1>Welcome to my Portfolio</h1>
            </div>
        </div>




    )
}
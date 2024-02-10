import LogoTitle from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "./index.scss";
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import Logo from "./Logo"
import AnimatedLetters from '../AnimatedLetters'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    const nameArray = ['s', 'h', 'a', 'r', ',']
    const jobArray = [
        'S',
        'o',
        'f',
        't',
        'w',
        'a',
        'r',
        'e',
        ' ',
        'E',
        'n',
        'g',
        'i',
        'n',
        'e',
        'e',
        'r',
        '.',
    ]

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="developer"></img>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}></AnimatedLetters>
                    <br></br>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}></AnimatedLetters>
                </h1>
                <h2>
                    Computer Science Student
                </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo></Logo>
        </div >
        <Loader type="pacman" />
        </>
    );
}

export default Home
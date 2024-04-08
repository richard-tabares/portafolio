import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { useFetchData } from "../hooks/useFetchData";
import { useState, useEffect } from "react";
import { getData } from "../helpers/getData";





export const Home = () => {

    // const [intro, setIntro] = useState()
    // const url = './src/data/data.json'
    const url = '/data.json'
    const data = useFetchData(url)

    return (
        <>
            <section className="mt-10 grid grid-cols-1">
                <div className="grid grid-cols-1 place-items-center">
                    <div className="rounded-full bg-gray-200 w-32 h-32"></div>
                </div>
                <article className="mt-8">
                    {
                        data.map(info => {

                            return info.intro

                        })
                    }
                </article>
                <footer className="mt-4">
                    <div className="inline"><strong>Encuentrame en </strong></div>
                    <a href="#"><FiGithub className="hover:text-gray-400 mx-3 inline" /></a>
                    <a href="#"><FiLinkedin className="hover:text-gray-400 mx-3 inline" /></a>
                    <a href="#"><FiInstagram className="hover:text-gray-400 mx-3 inline" /></a>
                    <a href="#"><FiMail className="hover:text-gray-400 mx-3 inline" /></a>
                    <a href="#">
                        <button type="button" className="block mt-4 btn-primary dark:darkButton">
                            <strong>Descarga CV</strong>
                        </button>
                    </a>
                </footer>
            </section>
        </>
    )
}

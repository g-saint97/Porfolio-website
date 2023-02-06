import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { useState } from "react";
import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import Image from 'next/image';
import georgedev from '../public/favicon.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false); 

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>George Saint Hilaire SWE | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section>
          <div>
            <nav className='py-10 flex justify-between '>
              <h1 className='text-xl font-burtons  dark:text-white'>George Saint Hilaire SWE</h1>
              <ul className='flex items-center'>
              <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
                <li><a className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded ml-8 dark:bg-gray-700" href="George.Saint.Hilaire.Resume.docx">Resume</a></li>
              </ul>
            </nav>
          </div>
          <div className=" bg-gray-200 shadow-xl rounded-2xl p-5 dark:bg-gray-700 ">
                  <div className="text-center p-10 py-10">
                    <h2 className="text-5xl py-2 text-purple-600 font-medium dark:text-white md:text-6xl">
                      George Saint Hilaire
                    </h2>
                    <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
                      Software Engineer 
                    </h3>
                    <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                      Freelancer providing services for programming and design content
                      needs. Join me down below and let's get cracking!
                    </p>
                    <div className="mx-auto bg-gradient-to-b from-purple-500 to-teal-500 rounded-full w-auto h-auto relative overflow-hidden mt-20 md:h-96 md:w-96">
                      <Image src={georgedev} alt='' className='animate-' />
                    </div>
                    <div className="text-5xl pt-12 flex justify-center gap-16 py-3 text-black-600 dark:text-gray-400">
                      <AiFillInstagram />
                      <AiFillLinkedin />
                      <AiFillGithub />
                    </div>
                  </div>
            </div>
        </section>
        
        <section>
          <div className='text-center py-12'>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-lg  py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-xl p-10 rounded-xl my-10 bg-teal-500 dark:bg-gray-700 flex-1">
              <Image src={design} alt="images"
               width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Beautiful Designs
              </h3>
              <p className="py-2 dark:text-white">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 font-bold text-black-600 dark:text-white">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 bg-blue-500 dark:bg-gray-700 flex-1">
              <Image src={code}  alt="images"
              width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">
                Code your dream project
              </h3>
              <p className="py-2 dark:text-white">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 font-bold text-black-600 dark:text-white">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
            </div>
            <div className="text-center shadow-xl p-10 rounded-xl my-10 bg-purple-500 dark:bg-gray-700 flex-1">
              <Image src={consulting} alt="images"
               width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Consulting</h3>
              <p className="py-2 dark:text-white">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 font-bold text-black-600 dark:text-white">Design Tools I Use</h4>
              <p className="text-gray-800 py-1 dark:text-white">Photoshop</p>
              <p className="text-gray-800 py-1 dark:text-white">Illustrator</p>
              <p className="text-gray-800 py-1 dark:text-white">Figma</p>
              <p className="text-gray-800 py-1 dark:text-white">Indesign</p>
            </div>
          </div>
        </section>
        <section className="py-10 ">
          <div className='text-center py-12'>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md p-5 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md p-5 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col p-5 gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover shadow-lg"
                alt="images"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover shadow-lg"
                alt="images"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover shadow-lg"
                alt="images"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover shadow-lg"
                alt="images"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover shadow-lg"
                alt="images"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover shadow-lg"
                alt="images"
                src={web6}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

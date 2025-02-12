import React from 'react'
import { Link } from 'react-router-dom'
import b1 from '../images/b1.jpg'
import machine1 from '../images/machine1.jpg'
import taxi2 from '../images/taxi2.jpg'
import ebike2 from '../images/ebike2.jpg'
import b2 from '../images/b2.jpg'
import plane from '../images/plane.jpg'
import b3 from '../images/b3.jpg'
import b4 from '../images/b4.jpg'
function Blog() {
  return (
    <>
        <section class="text-gray-400 bg-black body-font">
      <div class="container px-5 py-24 mx-auto flex flex-col">
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg h-64 overflow-hidden">
            <img src={b1} style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Services" />
          </div>
          <div class="flex flex-col sm:flex-row mt-10">
            <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div class="flex flex-col items-center text-center justify-center">
                <h2 class="font-medium title-font mt-4 text-white text-lg">Phoebe Caulfield</h2>
                <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p class="text-base text-gray-400">Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland.</p>
              </div>
            </div>
            <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p class="leading-relaxed text-lg mb-4">Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.</p>
              <Link class="text-indigo-400 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* ----------------------------------------------- */}
    <section class="text-gray-400 body-font bg-black">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Pitchfork Kickstarter Taxidermy</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
        </div>
        <div class="flex flex-wrap -m-4">
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img src={machine1} class="h-40 rounded w-full object-cover object-center mb-6" style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Machine" />
             <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">CAVER</h3>
              <h2 class="text-lg text-white font-medium title-font mb-4">Caver Machines</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img src={taxi2} class="h-40 rounded w-full object-cover object-center mb-6" style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Taxi" />
              <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">CAVER</h3>
              <h2 class="text-lg text-white font-medium title-font mb-4">Cheap Ride</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img src={ebike2} class="h-40 rounded w-full object-cover object-center mb-6" style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Ebike" />
              <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">CAVER</h3>
              <h2 class="text-lg text-white font-medium title-font mb-4">Day to Day life</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 p-4">
            <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
            <img src={plane} class="h-40 rounded w-full object-cover object-center mb-6" style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Plane" />
              <h3 class="tracking-widest text-indigo-400 text-xs font-medium title-font">CAVER</h3>
              <h2 class="text-lg text-white font-medium title-font mb-4">Vacations for Caver users</h2>
              <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
{/* -----------------Space The Final Frontier------------------- */}
    <section class="text-gray-400 bg-black body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-800 rounded overflow-hidden">
              <div class="w-24 h-full bg-indigo-900"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
              <img src={b2}  class="object-cover object-center h-full w-full" style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Plane" />
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-5">Louxry Cars</h2>
              <p class="text-base leading-relaxed mt-2">Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <Link class="text-indigo-400 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
              <img src={b3}  class="object-cover object-center h-full w-full" style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Plane" />
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-5">AC Train</h2>
              <p class="text-base leading-relaxed mt-2">Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <Link class="text-indigo-400 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
              <img src={b4}  class="object-cover object-center h-full w-full" style={{backgroundposition: "center" , backgroundsize: "cover" }} alt="Plane" />
              </div>
              <h2 class="text-xl font-medium title-font text-white mt-5">Fly with Caver</h2>
              <p class="text-base leading-relaxed mt-2">Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
              <Link class="text-indigo-400 inline-flex items-center mt-3">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
{/* -------------------Footer---------- */}
      <footer class="text-gray-400 bg-black body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap md:text-left text-center order-first">
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <Link class="text-gray-400 hover:text-white">First Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Second Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Third Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <Link class="text-gray-400 hover:text-white">First Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Second Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Third Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
              <nav class="list-none mb-10">
                <li>
                  <Link class="text-gray-400 hover:text-white">First Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Second Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Third Link</Link>
                </li>
                <li>
                  <Link class="text-gray-400 hover:text-white">Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CAVER</h2>
              <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label for="footer-field" class="leading-7 text-sm text-gray-400">Feedback</label>
                  <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded">Submit</button>
              </div>
              <p class="text-gray-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                <br class="lg:block hidden"/>waistcoat green juice
              </p>
            </div>
          </div>
        </div>
        <div class="bg-black bg-opacity-75">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link class="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <span class="ml-3 text-xl">Caver</span>
            </Link>
            <p class="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2022 Caver —
              <Link to="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">caver@Gamil.com</Link>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link class="text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              <Link class="ml-3 text-gray-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link>
              <Link class="ml-3 text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link>
              <Link class="ml-3 text-gray-400">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Blog
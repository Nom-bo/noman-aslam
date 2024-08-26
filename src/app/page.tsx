import React from 'react'
import Image from 'next/image'
const page = () => {
  return(
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-44 h-44 rounded-full mx-auto" src="/noman.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hi I am Noman Aslam Working as a Freelancer on Upwork and Fiverr my core services are lead generation and data entry. I am also
          working as a Wordpress Developer. Except it i also have more than 2 years experience as an CSR at mindbridge Lahore.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Noman Aslam
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Freelancer, Upwork and Fiverr
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page
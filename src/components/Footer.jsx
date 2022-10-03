import React from 'react'

const Footer = () => {
  return (
    <div className='bg-indigo-600'>
        <footer className="bg-indigo-600 text-white fixed inset-x-0 bottom-0 p-4 text-xs flex justify-between">
        <div>
            &copy; All Rights reserved 2022
        </div>
        <div className="space-x-1">
            <a className="fa" href='#main'>Home</a>
            <a className="fa"
              rel="noreferrer"
              href="https://github.com/SafeTorpedo/Teachers-Hack-2"
              target={"_blank"}>
              Github Repo
            </a>
            
        </div>
    </footer>    
    </div>
  )
}

export default Footer
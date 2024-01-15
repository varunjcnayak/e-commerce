import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
const inter = Inter({ subsets: ['latin'] })
import _ from "lodash"
//import Chatbot from './Chatbot'
import UseCaseMultipleStates from './useCaseMultipleStates'
import Chatbot from './chatbot'



export default function Home() {

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch('url');
        const result = await response.text();

      } catch (error) {
        console.log(error)

      }
    }
    fetcher();
  }, []
  )

  const [isValid, setisValid] = useState(true); 
  const arrayOfelements = [1,2,3,4,5]

  const handleclick = () => {
    setisValid(prev => !prev)
  }



  const { data: session } = useSession()
  if (!session) {
    return (
      <>
        <div>

          <button className="bg-black" onClick={handleclick}> Click me </button>
          <div className=" bottom-0 right-20 ">
            {isValid && 1 ? <Chatbot /> : <UseCaseMultipleStates props = {arrayOfelements} />}
          </div> 

        {/* <UseCaseMultipleStates />*/}

         



        </div>


      </>
    )
  }
  return (
    <>
      Signed in as {session.user.email} <br />

      <button className="items-center bg-black hover:bg-slate-900 p-6 px-5 rounded-md flex flex-row justify-center  " onClick={() => signOut()}>Sign out</button>
    </>
  )
}

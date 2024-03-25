import Link from "next/link"

export default function Home() {
  return (
    <main className='welcome w-screen h-screen flex flex-wrap place-content-center'>
      <div className='welcome-card max-w-[480px] max-h-[689px] sm:w-[480px] w-[90%] h-[689px] rounded-xl border-2	border-teal-300	'>
        <div className='sm:mx-[72px] my-[96px]'>
          <div className='w-full title'>
            Welcome!
          </div>
          <div className='w-full text-[14px] text-center text-white mt-[70px]'>
            Join us now!
          </div>
          <Link
            href="/auth/signup"
            className='common-btn py-[12px] mt-[60px]'
          >Create Account</Link>
          <div className='flex flex-wrap justify-between items-center text-white mt-[30px]'>
            <div className='split-line w-2/5'></div>
            <div>or</div>
            <div className='split-line w-2/5'></div>
          </div>
          <div className='w-full text-[14px] text-center text-white mt-[40px]'>
            <span>Already have an account?</span>
            <Link
              href="/auth/signin"
              className="cursor-pointer ml-[5px]"
            >Log in</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

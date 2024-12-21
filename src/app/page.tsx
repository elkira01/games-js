import Link from 'next/link'

export default function Home() {
   return (
      <div className="h-full w-full flex justify-center">
         <button className="btn btn-primary text-white">
            <Link href={'/connect-four'}>Connect 4</Link>
         </button>
      </div>
   )
}

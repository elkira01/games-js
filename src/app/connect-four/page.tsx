'use client'

import PlayBoard from '@/app/connect-four/_components/PlayBoard'
import { Fragment } from 'react'

export default function Page() {
   return (
      <Fragment>
         <div className="h-full w-full flex justify-center items-center">
            <PlayBoard />
         </div>
      </Fragment>
   )
}

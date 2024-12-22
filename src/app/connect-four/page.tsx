'use client'

import PlayBoard from './components/PlayBoard'
import { useConnectFour } from './use-connect-four'
import { Fragment } from 'react'

export default function Page() {
   const { player } = useConnectFour()
   return (
      <Fragment>
         <div
            style={{ backgroundColor: player.color, width: 30, height: 30 }}
            className="rounded-full"></div>
         <div className="h-full w-full flex justify-center items-center">
            <PlayBoard />
         </div>
      </Fragment>
   )
}

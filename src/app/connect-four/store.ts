import { BoardType, Player } from './types'

export type ConnectFourState = {
   board: BoardType
   currentPlayer: Player
   turnCount: number
}

export type ConnectFourAction = {
   initPlay: () => void
   makeMove: (row: number, col: number) => void
   checkWin: () => void
   checkDraw: () => void
   resetGame: () => void
   changePlayer: () => void
   // undoMove: () => void
}

export type ConnectFourStoreType = ConnectFourAction & ConnectFourState

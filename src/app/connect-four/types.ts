export type Player = {
   color: PlayerColor
   isAI?: boolean
   score?: number
   victory: boolean
}

export enum PlayerColor {
   NONE = '#ffffff',
   ONE = '#ffd500',
   TWO = '#f32525',
}

export type SlotType = {
   color: PlayerColor
   isPlayable: boolean
   col?: number
   row?: number
}

export type BoardType = {
   slots: SlotType[]
   isFrozen?: boolean
}

export type ConnectFourState = {
   board: BoardType
   currentPlayer: Player
   turnCount: number
   players: Player[]
}

export type ConnectFourAction = {
   makeMove: (row: number, col: number) => void
   resetBoard: () => void
   freezeBoard: () => void
   changePlayer: () => void
}
export type ConnectFourStoreType = ConnectFourAction & ConnectFourState

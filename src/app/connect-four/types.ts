export type Player = {
   id?: number
   name: string
   color: PlayerColor
   isAI?: boolean
   isHuman?: boolean
   score: number
   victory: boolean
}

export type BoardType = {
   slots: SlotType[]
}

export enum PlayerColor {
   NONE = '#ffffff',
   ONE = '#ffd500',
   TWO = '#f32525',
}

export type SlotType = {
   color?: PlayerColor
   isPlayable: boolean
   col: number
   row: number
}

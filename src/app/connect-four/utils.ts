import { BoardType, PlayerColor } from '@/app/connect-four/types'
import { COLUMNS_COUNT, ROWS_COUNT } from '@/app/connect-four/config'

export const checkHorizontalPattern = (
   board: BoardType,
   currentRow: number,
   color: PlayerColor,
): boolean => {
   const { slots } = board
   let count = 0

   for (let i = 0; i < COLUMNS_COUNT; i++) {
      if (slots[currentRow * COLUMNS_COUNT + i].color === color) {
         count++
      } else count = 0
   }

   return count >= 4
}

export const checkVerticalPattern = (
   board: BoardType,
   currentCol: number,
   color: PlayerColor,
): boolean => {
   let count = 0
   const { slots } = board

   for (let i = 0; i < ROWS_COUNT; i++) {
      if (slots[i * COLUMNS_COUNT + currentCol].color === color) {
         count++
      } else count = 0
   }

   return count >= 4
}

export const checkFirstDiagonalPattern = (
   board: BoardType,
   row: number,
   col: number,
   color: PlayerColor,
): boolean => {
   let count = 0
   let currentRow = row
   let currentCol = col
   const { slots } = board

   return count >= 4
}

export const checkSecondDiagonalPattern = () => {}

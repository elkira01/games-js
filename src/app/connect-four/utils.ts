import { BoardType, PlayerColor } from './types'
import { COLUMNS_COUNT, ROWS_COUNT } from './config'

export const checkHorizontalPattern = (
   board: BoardType,
   currentRow: number,
   color: PlayerColor,
): boolean => {
   const { slots } = board
   let count = 0

   for (let i = 0; i < COLUMNS_COUNT; i++) {
      // console.log(slots[currentRow * COLUMNS_COUNT + i]?.color)
      if (slots[currentRow * COLUMNS_COUNT + i]?.color === color) {
         count++
      } else {
         if (count == 4) return true
         else count = 0
      }
   }
   console.log('horizontal', count)
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
      if (slots[i * COLUMNS_COUNT + currentCol]?.color === color) {
         count++
      } else {
         if (count == 4) return true
         else count = 0
      }
   }
   console.log('vertical', count)

   return count >= 4
}

export const checkFirstDiagonalPattern = (
   board: BoardType,
   row: number,
   col: number,
   color: PlayerColor,
): boolean => {
   let countUp = 0
   let countDown = 0
   const { slots } = board
   let currentRow = row
   let currentCol = col

   while (currentRow >= 0 && currentCol < COLUMNS_COUNT) {
      if (slots[currentRow * COLUMNS_COUNT + currentCol]?.color === color) {
         countUp++
      } else {
         if (countUp == 4) return true
         else countUp = 0
      }
      currentRow--
      currentCol++
   }

   currentRow = row
   currentCol = col

   while (currentRow < ROWS_COUNT && currentCol >= 0) {
      if (slots[currentRow * COLUMNS_COUNT + currentCol]?.color === color) {
         countDown++
      } else {
         if (countDown == 4) return true
         else countDown = 0
      }
      currentRow++
      currentCol--
   }

   console.log('diag1', countUp, countDown)

   return countUp >= 4 || countDown >= 4
}

export const checkSecondDiagonalPattern = (
   board: BoardType,
   row: number,
   col: number,
   color: PlayerColor,
): boolean => {
   let countUp = 0
   let countDown = 0
   const { slots } = board
   let currentRow = row
   let currentCol = col

   while (currentRow >= 0 && currentCol >= 0) {
      if (slots[currentRow * COLUMNS_COUNT + currentCol]?.color === color) {
         countUp++
      } else {
         if (countUp == 4) return true
         else countUp = 0
      }
      currentRow--
      currentCol--
   }

   currentRow = row
   currentCol = col

   while (currentRow < ROWS_COUNT && currentCol < COLUMNS_COUNT) {
      if (slots[currentRow * COLUMNS_COUNT + currentCol]?.color === color) {
         countDown++
      } else {
         if (countDown == 4) return true
         else countDown = 0
      }
      currentRow++
      currentCol++
   }

   console.log('diag2', countUp, countDown)

   return countUp >= 4 || countDown >= 4
}

import { ConnectFourState, ConnectFourStoreType, PlayerColor } from './types'
import { createStore } from 'zustand/vanilla'
import { COLUMNS_COUNT, ROWS_COUNT } from '@/app/connect-four/config'
import { checkWin } from '@/app/connect-four/_utils/winConditionHelpers'

const initializeBoard = (): ConnectFourState['board'] => {
   const slots = Array(42).fill(null)

   for (let i = 0; i < COLUMNS_COUNT * ROWS_COUNT; i += 1) {
      slots[i] = {
         color: PlayerColor.NONE,
         isPlayable: true,
         col: i % COLUMNS_COUNT,
         row: i % ROWS_COUNT,
      }
   }
   return { slots: slots }
}

const initialState: ConnectFourState = {
   board: initializeBoard(), // 6 rows * 7 cols
   turnCount: 0,
   currentPlayer: {
      color: PlayerColor.ONE,
      victory: false,
   },
   players: [
      {
         color: PlayerColor.ONE,
         victory: false,
      },
      {
         color: PlayerColor.TWO,
         victory: false,
      },
   ],
}

export const connectFourStore = createStore<ConnectFourStoreType>(set => ({
   board: initialState.board,
   currentPlayer: initialState.currentPlayer,
   turnCount: initialState.turnCount,
   players: initialState.players,

   resetBoard: () => set(state => ({ ...initialState, board: initializeBoard() })),

   freezeBoard: () =>
      set(state => {
         const updatedBoard = [...state.board.slots]
         updatedBoard.forEach(slot => {
            slot.isPlayable = false
         })
         return {
            ...state,
            board: { slots: updatedBoard },
         }
      }),

   changePlayer: () =>
      set(state => ({
         ...state,
         currentPlayer: state.currentPlayer.victory
            ? state.currentPlayer
            : state.players[state.turnCount % state.players.length],
      })),

   makeMove: (row, col) =>
      set(state => {
         const { board, players, currentPlayer, turnCount } = state
         const updatedBoard = [...board.slots]

         if (updatedBoard[row * COLUMNS_COUNT + col]?.isPlayable) {
            updatedBoard[row * COLUMNS_COUNT + col] = {
               color: currentPlayer.color,
               isPlayable: false,
               col,
               row,
            }

            const winningCondition = checkWin({ slots: updatedBoard }, row, col)

            if (winningCondition) {
               players[turnCount % players.length].victory = true
               state.freezeBoard()
            }

            return {
               ...state,
               board: { slots: updatedBoard },
               turnCount: turnCount + 1,
            }
         }
         return state
      }),
}))

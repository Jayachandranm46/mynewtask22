import { configureStore } from '@reduxjs/toolkit'
import Addtocardslice from './Addtocardslice'
import Chekoutslice from './chekoutpage'
import Signupslice from './Signupslice'

export const store = configureStore({
  reducer: {
     Addfavorite:Addtocardslice,
     Chekout:Chekoutslice,
     signdata:Signupslice
  },
})  
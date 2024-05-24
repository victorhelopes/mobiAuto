'use client'
import { Provider, ReactReduxContext } from 'react-redux'
import store from '../store';

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  return <Provider store={store} context={ReactReduxContext}>{children}</Provider>
}
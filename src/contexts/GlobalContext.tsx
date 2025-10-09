"use client"
import { createCustomContext } from "@/helpers/CreateCustomContext"
import react from "react"

interface IGlobalState {
  itemsView: "grid" | "list"
  isSidebarOpen: boolean
}

const initialState: IGlobalState = {
  itemsView: "grid",
  isSidebarOpen: true,
}

function setState(
  state: IGlobalState,
  newState: Partial<IGlobalState>
): IGlobalState {
  return { ...state, ...newState }
}


const functions = {
  setState
}

const { Context, Provider, useContextHook } = createCustomContext<
  IGlobalState,
  typeof functions
>({
  initialState,
  functions,
})

export const GlobalContextProvider = Provider
export const useGlobalContext = useContextHook

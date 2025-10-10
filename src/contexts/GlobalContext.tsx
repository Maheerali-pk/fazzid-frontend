"use client"
import { createCustomContext } from "@/helpers/CreateCustomContext"
import react from "react"
export type DiveType = "dive-deeper" | "diving-deeper";
export type SearchType = "categories" | "website" | "channel" | "keywords";
interface IGlobalState {
  itemsView: "grid" | "list"
  isSidebarOpen: boolean
  diveType: DiveType;
  searchType: SearchType;
}

const initialState: IGlobalState = {
  itemsView: "grid",
  isSidebarOpen: true,
  diveType: "dive-deeper",
  searchType: "categories"
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

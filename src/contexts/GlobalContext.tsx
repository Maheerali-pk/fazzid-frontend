"use client"
import { createCustomContext } from "@/helpers/CreateCustomContext"
import react from "react"
export type DiveType = "dive-deeper" | "diving-deeper";
export type SearchType = "categories" | "website" | "channel" | "keywords";
export interface INewsItem {
  id: number;
  source: string;
  categories: string[];
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}
interface IGlobalState {
  itemsView: "grid" | "list" | "none"
  sidebarStatus: "closed" | "semi-opened" | "full";
  diveType: DiveType;
  searchType: SearchType;
  selectedCountryId?: string | null;
  searchKeyword: string;
  channelsSelected: string[];
}

const initialState: IGlobalState = {
  itemsView: "grid",
  sidebarStatus: "closed",
  selectedCountryId: null,
  // sidebarStatus: "semi-opened",
  searchKeyword: "",

  diveType: "dive-deeper",
  searchType: "categories",
  channelsSelected: []

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

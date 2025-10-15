"use client"
import { PageTabItem } from "@/components/PageTabs";
import { createCustomContext } from "@/helpers/CreateCustomContext"
import react, { useEffect } from "react"
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
  selectedPageId: string;
  allPages: PageTabItem[]
}

const initialState: IGlobalState = {
  itemsView: "grid",
  allPages: [{ id: "0", name: "Pakistan" }, { id: "1", name: "India" }],
  sidebarStatus: localStorage?.getItem("sidebarStatus") as "closed" | "semi-opened" | "full" || "closed",
  selectedCountryId: null,
  selectedPageId: "0",
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
  customHook: (state) => {
    useEffect(() => {
      localStorage.setItem("sidebarStatus", state.sidebarStatus);
    }, [state.sidebarStatus]);
  }
})

export const GlobalContextProvider = Provider
export const useGlobalContext = useContextHook

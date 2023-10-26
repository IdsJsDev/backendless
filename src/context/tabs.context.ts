import { createContext, useContext } from 'react';
import { ITab } from '../interfaces/tabs.interface.ts';
export interface ITabsContext {
  active: string;
  tabs: ITab[] | undefined;
  setActiveTab(tab: string): void;
}
const contextInitial = {
  active: '',
  tabs: [],
  setActiveTab: () => {},
};

export const TabsContext = createContext<ITabsContext>(contextInitial);
export const useTabsContext = (): ITabsContext => useContext(TabsContext);


import {create} from 'zustand'

interface SidebarStore
{
    collapsed: boolean;
    onExpend: () => void;
    onCollaps: () => void;
}

export const useSidebar = create<SidebarStore>((set)=> ({
    collapsed: false,
    onExpend : ()=> set(() => ({collapsed:false})),
    onCollaps : ()=> set(() => ({collapsed:true})),
}))
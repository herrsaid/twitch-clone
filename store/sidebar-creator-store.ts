import {create} from 'zustand'

interface SidebarCreatorStore
{
    collapsed: boolean;
    onExpend: () => void;
    onCollaps: () => void;
}

export const useCreatorSidbar = create<SidebarCreatorStore>((set)=> ({
    collapsed: false,
    onExpend : ()=> set(() => ({collapsed:false})),
    onCollaps : ()=> set(() => ({collapsed:true})),
}))
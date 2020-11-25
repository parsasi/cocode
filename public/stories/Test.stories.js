import React from 'react';
import Sidebar from '../src/comps/Sidebar'; 
import ExploreBox from '../src/comps/Explore';
import Search from '../src/comps/Search'; 
import AccountBox from '../src/comps/Account'; 
import PRTab from '../src/comps/PendingRequests';
import USTab from '../src/comps/UpcomingSessions'; 
import FSTab from '../src/comps/FreeSession'; 
import RightSidebar from '../src/comps/RightSidebar'; 

export default {
    title: 'Test', 
    component: Sidebar, Search, ExploreBox
}; 

export const SidebarComponent = () => <Sidebar />; 
export const ExploreBoxComponent = () => <ExploreBox />; 
export const SearchComponent = () => <Search />;
export const AccountBoxComponent = () => <AccountBox />; 
export const PRTabComponent = () => <PRTab />; 
export const USTabComponent = () => <USTab />; 
export const FSTabComponent = () => <FSTab />; 
export const RightSidebarComponent = () => <RightSidebar />; 

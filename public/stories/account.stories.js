import React from 'react';
import EditItem from '../src/comps/EditItem'; 
import EditProfPic from '../src/comps/EditProfPic'; 
import ListLine from '../src/comps/ListLine';
import List from '../src/comps/List';
import AccountEdit from '../src/comps/AccountEdit';
import TutorComp from '../src/comps/TutorComp';
import Accordion from '../src/comps/Accordion';

export default {
    title: 'Account', 
    component: EditItem, EditProfPic, ListLine, List, AccountEdit, TutorComp, MyAccountPage, Accordion
}; 

export const EditItemComp = () => <EditItem />;
export const BasicPicComp = () => <EditProfPic />;
export const ProfPicComp = () => <EditProfPic picture="/guy.jpg" />;
export const ListLineComp = () => <ListLine />;
export const ListComp = () => <List />;
export const AccountEditComp = () => <AccountEdit />;
export const TutorCompComp = () => <TutorComp />;
export const MyAccountPageComp = () => <MyAccountPage />;
export const MyAccordionComp = () => <Accordion />;
import React from 'react';
import SessionBox from '../src/comps/Session'; 
import Filter from '../src/comps/Filter';
import UserProfile from '../src/comps/UserProfile';
import Rating from '../src/comps/Rating';

export default {
    title: 'Dropdown', 
    component: SessionBox
}; 

export const BasicSessionBox = () => <SessionBox />;
export const RatingFilter = () => <Filter reMove1="false" reMove2="false"/>
export const AvailibilityFilter = () => <Filter FilterName="Availibility" reMove1="false" text1="Weekday" text2="Weekend"/>
export const LanguageFilter = () => <Filter reMove1="false" reMove2="false" FilterName="Language" text1="English" text2="French" text3="Portuguese" text4="Spanish"/>
export const PriceFilter = () => <Filter reMove2="false" FilterName="Price" text1="$40/hour" text3="$50/hour" text4="$60/hour"/>
export const BasicUserProfile = () => <UserProfile/>
export const BasicRating = () => <Rating />



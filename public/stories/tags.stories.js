import React from 'react';
import LangTags from '../src/comps/LangTags'; 
import ProfTags from '../src/comps/ProfTags'; 

export default {
    title: 'Tags', 
    component: LangTags, ProfTags
}; 

export const TutorTag = () => <ProfTags text="Tutor"/>;
export const StudentTag = () => <ProfTags text="Student"/>; 
export const JavaScriptTag = () => <LangTags text="JavaScript"/>;
export const ReactJSTag = () => <LangTags text="ReactJS"/>; 
export const HTMLTag = () => <LangTags text="HTML"/>;
export const CSSTag = () => <LangTags text="CSS"/>; 

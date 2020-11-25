import React from 'react';
import Button from '../src/comps/Button'; 

export default {
    title: 'Buttons', 
    component: Button
}; 

export const HomeButton = () => <Button />; 
export const BackButton = () => <Button text="< Back"/>;
export const NextButton = () => <Button text="Next >"/>; 
export const ConfirmButton = () => <Button text="Confirm"/>; 
export const BookButton = () => <Button text="Book"/>; 
export const ProfileButton = () => <Button text="Profile"/>; 
export const PaymentButton = () => <Button text="Payment"/>; 
export const SignInButton = () => <Button text="Sign In"/>; 
export const SignUpButton = () => <Button text="Sign Up"/>; 
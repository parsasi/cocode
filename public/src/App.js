import React from 'react';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom"; 
import ExplorePage from "./pages/Explore"; 
import BecomeATutor from './pages/BecomeATutor';
import ContactUs from './pages/ContactUs';
import FAQ from './pages/FAQ'; 
import FindATutor from './pages/FindATutor';
import MyAccount from './pages/MyAccount';
import MySession from './pages/MySession'; 
import PrivacyPolicy from './pages/PrivacyPolicy'; 
import TermsOfService from './pages/TermsofService';
import SignInPage from './pages/SignIn';
import SignUpPage from './pages/SignUp';
import EditAccount from './pages/EditAccount'; 
import TutorProfile from './pages/TutorProfile';
import SessionRequested from './pages/SessionRequested';
import SessionConfirmed from './pages/SessionConfirmed'; 
import InfoPage from './pages/StudentSessionInfo'; 
import ConfirmPage from './pages/StudentSessionConfirm';
import CalendarPage from './pages/StudentSessionRequested';
import PaymentPage from './pages/StudentSessionPayment';
import StudentSessionSuccess from './pages/StudentSessionSuccess'; 
import ReviewPage from './pages/ReviewPage';
import FreeSession from './pages/FreeSession';
import authTest from './api/auth/authTest'; 
import UserContextProvider from './comps/ContextProviders/UserContextProvide'
import Authenticate from './comps/Authenticate/Authenticate'

//global styles
import './App.scss'
import CollabSpace from './pages/CollabSpace';

function App() {
  return (
    <Router>
          <Switch>
            <UserContextProvider>
              <Route path="/" exact component={SignInPage} />
              <Route path="/SignUp" component={SignUpPage} />
              <Route path="/Explore" component={ExplorePage} />
              <Route path="/BecomeATutor" component={BecomeATutor} />
              <Route path="/ContactUs" component={ContactUs} />
              <Route path="/FAQ" component={FAQ}/>
              <Route path="/FindATutor" component={FindATutor} />
              <Route path="/TutorProfile" component={TutorProfile} />
              <Route path="/MyAccount" component={MyAccount} />
              <Route path="/MySession" component={MySession} />
              <Route path="/PrivacyPolicy" component={PrivacyPolicy} />
              <Route path="/TermsOfService" component={TermsOfService} />
              <Route path="/SessionRequested" component={SessionRequested} />
              <Route path="/SessionConfirmed" component={SessionConfirmed} />
              <Route path="/EditAccount" component={EditAccount} />
              <Route path="/StudentSessionRequested" component={CalendarPage} /> 
              <Route path="/StudentSessionInfo" component={InfoPage} />
              <Route path="/StudentSessionConfirm" component={ConfirmPage} />
              <Route path="/StudentSessionPayment" component={PaymentPage} />
              <Route path="/StudentSessionSuccess" component={StudentSessionSuccess} />
              <Route path="/CollabSpace/:role/:uuid" component={CollabSpace} />
              <Route path="/FreeSession" component={FreeSession} />
              <Route path="/GiveReview" component={ReviewPage} />
            </UserContextProvider>
          </Switch>
    </Router>
  );
}

export default App;

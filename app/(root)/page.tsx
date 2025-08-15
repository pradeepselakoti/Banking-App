import React from 'react'
import HeaderBox from '../components/HeaderBox'
import TotalBalanceBox from '../components/TotalBalanceBox';
import RightSidebar from '../components/RightSidebar';


const Home = () => {
  const loggedIn = {firstName: 'Pradeep' ,lastName: 'Selakoti', email:'Pradeepselakoti@gmail.com'};
  return (
      <section className="home">
      <div className="home-content">
        <header className="home-header">
         <HeaderBox 
         type="greeting"
         title="Welcome"
         user= {loggedIn?.firstName || 'Guest'}
         subtext="Access and manage your account an transactions efficiently"
         />

         <TotalBalanceBox
            accounts ={[]}
            totalBanks={1}
            totalCurrentBalance={1250.78}
            />
        </header>
        RECENT TRANSACTION
         </div>

         <RightSidebar 
          user={loggedIn}
          transactions={[]}
          banks={[{currentBalance:123.40},{currentBalance:4343.898}]}
         />
      </section>
  )
}

export default Home
import {  ChevronDown, Dot, Slice } from 'lucide-react'
import React, { PureComponent } from 'react';
import Footer from '../partials/Footer'
import Header from '../partials/Header'
import SideNavigation from '../partials/SideNavigation'
import DashboardCard from './DashboardCard'
import DashboardAccordion from './DashboardAccordion'
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts"
import { menus } from '@/components/menu-data';





const Dashboard = () => {
   
  return (
    <>
      <section className='layout-main '>
        <div className=" layout-division ">
       <SideNavigation menu="Dashboard"/>
            <main >
               <Header title='Dashboard' subtitle='Welcome to Zenerobe'/>
               <div className="p-8">
              <div className="grid grid-cols-[1fr_400px] gap-5">
                <div className="stats">
                  <div className="grid grid-cols-4 gap-5">
                   <DashboardCard title='BlackTshirt' filterby='BlackTshirt'/>
                   <DashboardCard title='WhiteTshirt' filterby='WhiteTshirt'/>
                   <DashboardCard title='White' filterby='White'/>
                 
                  </div>
              
               
        <div className='chart mt-10'>
            <h3>Menu Pricess</h3>
       
        <BarChart
          width={1200}
          height={400}
          data={menus.slice(0,10)}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="menu_title" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="menu_price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
        
        </BarChart>
     
      

        </div>
                </div>
                <div className="sidebar overflow-auto custom-scroll h-[calc(100ch-200px)]">
                <DashboardCard title='BlackTshirt' filterby='BlackTshirt'/>
                   <DashboardCard title='WhiteTshirt' filterby='WhiteTshirt'/>
                   <DashboardCard title='White' filterby='White'/>
                </div>
              </div>
            </div>
                <Footer/>
            </main>
        </div>
    </section>
    </>
  )
}

export default Dashboard

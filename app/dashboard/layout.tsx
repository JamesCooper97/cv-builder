import React from 'react';
import Header from './components/Header/Header';
import DashboardStyles from './dashboard.module.css';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className={DashboardStyles.dashboard_container}>
            <Header />
            {children}
        </div>
    );
}

export default DashboardLayout;
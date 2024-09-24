import React from 'react';
import Header from './components/Header/Header';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default DashboardLayout
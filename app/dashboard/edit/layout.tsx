import React from 'react';
import EditStyles from './edit.module.css';
import Sidebar from '../components/editor/Sidebar';

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className={EditStyles.dashboard_container}>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;
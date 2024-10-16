import React from 'react';
import EditStyles from './edit.module.css';
import Sidebar from '../components/editor/Sidebar';
import { Poppins } from 'next/font/google';

const roboto = Poppins({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

interface DashboardLayoutProps {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <main className={roboto.className}>
            <div className={EditStyles.dashboard_container}>
                <Sidebar />
                <div className={EditStyles.edit_container}>
                    {children}
                </div>
            </div>
        </main>
    );
}

export default DashboardLayout;
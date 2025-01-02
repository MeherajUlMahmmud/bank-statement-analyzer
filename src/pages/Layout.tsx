import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const location = useLocation(); // Get the current path
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <Navbar location={location} />
            <main className="max-w-[1250px] mx-auto flex-grow">
                {children}
            </main>
            <Footer />
            {showButton && (
                <Button
                    size={"lg"}
                    onClick={scrollToTop}
                    className="fixed bottom-10 right-10 p-2 rounded-full shadow-lg"
                >
                    <ArrowUp size={24} />
                </Button>
            )}
        </div>
    );
}

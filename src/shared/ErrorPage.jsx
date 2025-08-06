import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            fontFamily: 'Segoe UI, sans-serif'
        }}>
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#fff2" />
                <path d="M12 8v4" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="16" r="1" fill="#fff"/>
                <circle cx="12" cy="12" r="9" stroke="#fff" strokeWidth="2"/>
            </svg>
            <h1 style={{ fontSize: '3rem', margin: '20px 0 10px' }}>Oops!</h1>
            <p style={{ fontSize: '1.25rem', marginBottom: 30 }}>
                Something went wrong.<br />
                The page you are looking for doesn't exist or an error occurred.
            </p>
            <Link
                href="/"
                style={{
                    padding: '12px 28px',
                    background: '#fff',
                    color: '#764ba2',
                    borderRadius: '25px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}
            >
                Go Home
            </Link>
        </div>
    );
};

export default ErrorPage;
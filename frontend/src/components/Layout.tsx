import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Activity, Network, Server } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Items', icon: LayoutDashboard },
  { to: '/health', label: 'API Health', icon: Activity },
  { to: '/architecture', label: 'Architecture', icon: Network },
];

const ORANGE = '#FF9900';
const SIDEBAR_BG = '#0d1424';
const PAGE_BG = '#0a0e1a';
const BORDER = '#1a2540';

export default function Layout() {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', background: PAGE_BG }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '220px',
          height: '100%',
          background: SIDEBAR_BG,
          borderRight: `1px solid ${BORDER}`,
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          overflowY: 'auto',
        }}
      >
        {/* Logo */}
        <div style={{ padding: '20px 16px', borderBottom: `1px solid ${BORDER}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: ORANGE, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Server size={18} color="#0a0e1a" />
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '14px', color: '#e8edf5', lineHeight: 1 }}>Stratus</div>
            <div style={{ fontSize: '11px', color: '#8892a4', marginTop: '2px' }}>Cloud Platform</div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ padding: '12px 8px', flex: 1 }}>
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '8px',
                marginBottom: '4px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 0.15s',
                background: isActive ? 'rgba(255,153,0,0.1)' : 'transparent',
                color: isActive ? ORANGE : '#8892a4',
                borderLeft: isActive ? `3px solid ${ORANGE}` : '3px solid transparent',
              })}
            >
              <Icon size={16} />
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div style={{ padding: '16px', borderTop: `1px solid ${BORDER}`, fontSize: '11px' }}>
          <div style={{ color: '#8892a4', marginBottom: '4px' }}>Built by</div>
          <div style={{ color: '#e8edf5', fontWeight: 600 }}>Jonathan Williams</div>
          <div style={{ marginTop: '4px', color: ORANGE, fontSize: '10px' }}>Senior Cloud Architect</div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, height: '100%', overflowY: 'auto', minWidth: 0 }}>
        <Outlet />
      </main>
    </div>
  );
}

import './Header.css';
import { Search, Bell, Plus, Menu } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../../store/slices/uiSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.ui.sidebarOpen);

  return (
    <div className="header-wrapper">
      <header className="header-container">
        <div className="left-section">
          <button className="menu-button" onClick={() => dispatch(toggleSidebar())} aria-label="Open sidebar">
            <Menu size={26} />
          </button>
        </div>
        <div className="center-section">
          <div className="search-bar">
            <Search size={20} color="var(--text-secondary)" />
            <input 
              type="text" 
              placeholder="Search..." 
              aria-label="Search"
              role="searchbox"
            />
          </div>
        </div>
        <div className="right-section">
          <button className="icon-button">
            <Bell size={22} />
          </button>
          <button className="add-button">
            <Plus size={22} />
          </button>
          <div className="user-profile">
            <img src="https://i.pravatar.cc/150?img=1" alt="User avatar" />
            <span>John Doe</span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header; 
'use client'
import Image from "next/image";
import { useState } from "react";
import CopyTrade from "./copy/page";
import { Menu, X, User, TrendingUp, Copy, Home } from "lucide-react";
export default function NotHome() {
  const [pastcopytradewallets, setPastcopytradewallets] = useState(null);
  const [rankedwallets, setRankedwallets] = useState(false);
  const [showCopyTrade, setShowCopyTrade] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const handleShowCopyTrade = () => {
    setShowCopyTrade(true);
  };

  const handleCloseCopyTrade = () => {
    setShowCopyTrade(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      {/* Top Navbar for Desktop */}
      <div className="hidden md:flex justify-between border-b border-gray-200">
        <div className="flex gap-10 ml-10 my-6">
          <div 
            className={`cursor-pointer ${activeTab === 'ranked' ? 'font-semibold text-blue-600' : ''}`}
            onClick={() => setActiveTab('ranked')}
          >
            Ranked Wallets
          </div>
          <div 
            className={`cursor-pointer ${activeTab === 'your' ? 'font-semibold text-blue-600' : ''}`}
            onClick={() => setActiveTab('your')}
          >
            Your CopyTrades
          </div>
        </div>
        <div 
          className="flex justify-center items-center text-white bg-gray-800 gap-3 -z-100 mx-10 my-5 px-4 py-2 rounded-lg cursor-pointer"
          onClick={handleShowCopyTrade}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 14 14">
            <path d="M2.625 0A2.625 2.625 0 000 2.625v8.75A2.625 2.625 0 002.625 14h8.75A2.625 2.625 0 0014 11.375v-1.4h-3.5a2.975 2.975 0 110-5.95H14v-1.4A2.625 2.625 0 0011.375 0h-8.75z"></path>
            <path d="M14 5.25h-3.5a1.75 1.75 0 100 3.5H14v-3.5z"></path>
          </svg>
          Create CopyTrade
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <div className="md:hidden flex justify-between items-center border-b border-gray-200 px-4 py-3">
        <div className="font-semibold text-lg">CopyTrader</div>
        <div className="flex items-center gap-3">
          <button
            className="flex justify-center items-center text-white bg-gray-800 gap-2 px-3 py-1 rounded-lg text-sm"
            onClick={handleShowCopyTrade}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 14 14">
              <path d="M2.625 0A2.625 2.625 0 000 2.625v8.75A2.625 2.625 0 002.625 14h8.75A2.625 2.625 0 0014 11.375v-1.4h-3.5a2.975 2.975 0 110-5.95H14v-1.4A2.625 2.625 0 0011.375 0h-8.75z"></path>
              <path d="M14 5.25h-3.5a1.75 1.75 0 100 3.5H14v-3.5z"></path>
            </svg>
            Create
          </button>
          <button onClick={toggleMobileMenu} className="p-1">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-14 left-0 right-0 bg-white z-50 border-b border-gray-200 shadow-md">
          <div 
            className="px-6 py-4 border-b border-gray-100 font-medium"
            onClick={() => {
              setActiveTab('ranked');
              setMobileMenuOpen(false);
            }}
          >
            Ranked Wallets
          </div>
          <div 
            className="px-6 py-4 font-medium"
            onClick={() => {
              setActiveTab('your');
              setMobileMenuOpen(false);
            }}
          >
            Your CopyTrades
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow flex justify-center items-center">
        {pastcopytradewallets == null && !rankedwallets && (
          <div className="text-center px-4">
            <div className="flex justify-center items-center my-6">you dont copy</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="86" height="86" fill="#9CA1AE" viewBox="0 0 86 86" className="mx-auto mb-3">
              <path d="M80.273 9.634h-3.915V5.72h-3.915V1.78H17.483V33.2H5.712v3.915h19.625V33.2h-3.915V5.72h43.166v15.684h15.685v39.251h-3.915v7.855h3.915v11.77h3.94V13.576h-3.94v-3.94z"></path>
              <path d="M21.422 80.28h58.851v3.915h-58.85v-3.914z"></path>
              <path d="M72.444 52.8h3.914v7.855h-3.915V52.8z"></path>
              <path d="M68.503 44.97h3.94v7.83h-3.94v-7.83z"></path>
              <path d="M29.278 41.03h39.225v3.94H29.278v-3.94z"></path>
              <path d="M52.818 21.404h3.915v3.94h-3.915v-3.94z"></path>
              <path d="M41.048 29.26h11.77v3.94h-11.77v-3.94z"></path>
              <path d="M37.107 21.404h3.94v3.94h-3.94v-3.94z"></path>
              <path d="M25.337 37.115h3.94v3.915h-3.94v-3.915z"></path>
              <path d="M17.482 72.425h3.94v7.856h-3.94v-7.856z"></path>
              <path d="M13.567 64.596h3.915v7.83h-3.915v-7.83z"></path>
              <path d="M9.652 56.74h3.915v7.856H9.652V56.74z"></path>
              <path d="M5.712 48.885h3.94v7.855h-3.94v-7.855z"></path>
              <path d="M1.797 37.115h3.915v11.77H1.797v-11.77z"></path>
            </svg>
            <div className="flex justify-center items-center my-6">trade anyone yet</div>
          </div>
        )}
      </div>

      {/* CopyTrade Slide-in Component */}
      <div 
        className={`fixed top-0 right-0 w-full md:w-1/2 lg:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          showCopyTrade ? 'translate-x-0' : 'translate-x-full'
        } z-50 overflow-y-auto`}
      >
        {showCopyTrade && (
          <div className="p-4">
            <div className="flex justify-between items-center mb-4 z-10">
              <h2 className="text-xl font-bold">Create CopyTrade</h2>
              <button 
                onClick={handleCloseCopyTrade}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <CopyTrade />
          </div>
        )}
      </div>

      {/* Overlay when CopyTrade is visible */}
      {showCopyTrade && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleCloseCopyTrade}
        ></div>
      )}

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-3">
        <button 
          className={`flex flex-col items-center justify-center text-xs ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('home')}
        >
          <Home size={20} />
          <span>Home</span>
        </button>
        <button 
          className={`flex flex-col items-center justify-center text-xs ${activeTab === 'ranked' ? 'text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('ranked')}
        >
          <TrendingUp size={20} />
          <span>Ranked</span>
        </button>
        <button 
          className={`flex flex-col items-center justify-center text-xs ${activeTab === 'your' ? 'text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('your')}
        >
          <Copy size={20} />
          <span>Your Trades</span>
        </button>
        <button 
          className={`flex flex-col items-center justify-center text-xs ${activeTab === 'profile' ? 'text-blue-600' : 'text-gray-500'}`}
          onClick={() => setActiveTab('profile')}
        >
          <User size={20} />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}
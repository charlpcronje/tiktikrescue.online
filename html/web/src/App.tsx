import React from 'react';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Feature from './components/Feature';
import { Download, Shield, Zap, Share2, Clock, Cloud, Check } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#2e2b2e] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#5cfffa] to-[#ff2e57] text-transparent bg-clip-text">
              Secure Your TikTok Memories Before the Ban!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Effortlessly Download, Preserve, and Transfer Your TikTok Content Safely.
            </p>
            <Button>Download Now - Only $4.99</Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80"
              alt="TikTok Content"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[#3a373a]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Once off Payment. No Hidden Fees</h2>
          <div className="max-w-md mx-auto bg-[#2e2b2e] p-8 rounded-2xl">
            <div className="text-5xl font-bold mb-6">$4.99</div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-2">
                <Check className="text-[#5cfffa]" /> Unlimited downloads and transfers
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#5cfffa]" /> Lifetime access to updates
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-[#5cfffa]" /> No recurring fees
              </li>
            </ul>
            <Button>Get Started Now</Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">See How It Works</h2>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto bg-[#3a373a] rounded-2xl flex items-center justify-center">
            <p className="text-xl text-gray-400">Video Placeholder</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#3a373a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 text-center">Why choose TikTok Rescue?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-center mb-16">
            With the impending TikTok ban on January 19th, safeguarding your cherished content has never been more crucial. TikTokRescue is your reliable solution to securely download and preserve your TikTok videos before they potentially disappear.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              icon={Shield}
              title="Secure Downloads"
              description="Safe and private content downloading with encryption"
            />
            <Feature
              icon={Zap}
              title="Lightning Fast"
              description="Download multiple videos simultaneously at high speed"
            />
            <Feature
              icon={Share2}
              title="Easy Transfer"
              description="Seamlessly transfer content to other platforms"
            />
            <Feature
              icon={Clock}
              title="Time-Saving"
              description="Batch download functionality for efficiency"
            />
            <Feature
              icon={Cloud}
              title="Cloud Backup"
              description="Automatic cloud backup of your content"
            />
            <Feature
              icon={Download}
              title="Offline Access"
              description="Download for offline viewing anytime"
            />
          </div>
        </div>
      </section>

      {/* Affiliate Section */}
      <section id="affiliates" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Affiliate Program</h2>
          <p className="text-2xl text-[#5cfffa] font-semibold mb-8">Earn 30% for Every Referral</p>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Partner with TikTokRescue and turn your network into earnings. As an affiliate, you'll receive a generous 30% commission for every referral that purchases our service.
          </p>
          <Button>Become an Affiliate</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3a373a] py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 TikTokRescue. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
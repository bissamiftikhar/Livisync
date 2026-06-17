'use client';

import { Link } from 'react-router';
import { Home, Users, Building2, MessageCircle, Shield, CheckCircle2, ArrowRight, MapPin, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-black">LiviSync</span>
          </div>
          <div className="flex gap-3">
            <Link to="/login" className="px-6 py-2.5 text-gray-700 hover:text-black font-medium transition-colors">
              Sign In
            </Link>
            <Link to="/register" className="px-6 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-gray-900">
                Find Your Perfect Roommate
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Connect with compatible roommates and find your ideal living space. Simple, transparent, and designed for students.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link to="/register" className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-900 transition-all font-semibold flex items-center gap-2 shadow-sm hover:shadow-md">
                  Start Today <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className={`grid grid-cols-2 gap-5 transition-all duration-1000 delay-300 ${animate ? 'opacity-100' : 'opacity-0'}`}>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-between h-56">
                <Users className="w-6 h-6 text-gray-800" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">12,340</div>
                  <p className="text-sm text-gray-600 mt-1">Active Students</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-between h-56">
                <Building2 className="w-6 h-6 text-gray-800" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">389</div>
                  <p className="text-sm text-gray-600 mt-1">Verified Hostels</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-between h-56">
                <MessageCircle className="w-6 h-6 text-gray-800" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">28.5K</div>
                  <p className="text-sm text-gray-600 mt-1">Successful Matches</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 flex flex-col justify-between h-56">
                <Star className="w-6 h-6 text-gray-800" />
                <div>
                  <div className="text-3xl font-bold text-gray-900">4.8★</div>
                  <p className="text-sm text-gray-600 mt-1">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three simple steps to find your perfect living situation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 font-bold text-gray-900">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Create Your Profile</h3>
                <p className="text-gray-600 leading-relaxed">Share your preferences, habits, and requirements. Be honest about your lifestyle and budget.</p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 font-bold text-gray-900">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Browse & Connect</h3>
                <p className="text-gray-600 leading-relaxed">Discover compatible roommates and hostels. See reviews, photos, and detailed information.</p>
              </div>

              <div className="bg-white rounded-lg p-8 border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6 font-bold text-gray-900">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Finalize & Move</h3>
                <p className="text-gray-600 leading-relaxed">Chat, video call, and arrange everything. Secure payments and documentation included.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-10 text-gray-900">Why Students Choose LiviSync</h2>
              
              <div className="space-y-5">
                {[
                  { title: 'Verified Profiles', desc: 'Every student and hostel verified' },
                  { title: 'Real Conversations', desc: 'Direct messaging and video calls' },
                  { title: 'Transparent Pricing', desc: 'No hidden fees or surprises' },
                  { title: 'Safe & Secure', desc: 'Encrypted payments and data protection' },
                  { title: 'Easy Booking', desc: 'Simple process from match to move-in' },
                  { title: 'Great Community', desc: 'Review system keeps everyone honest' }
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-gray-800 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">{benefit.title}</p>
                      <p className="text-gray-600 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-white">
                <div className="text-4xl font-bold mb-2">4.8/5</div>
                <p className="text-gray-200 mb-4">Average rating from 2,847 verified students</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white" />
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <MapPin className="w-8 h-8 text-gray-800 mb-3" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Available Nationwide</h3>
                <p className="text-gray-600">Active in 50+ cities with 389 verified hostels</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-black py-24">
          <div className="max-w-4xl mx-auto px-6 text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Ready to Find Your Perfect Roommate?</h2>
            <p className="text-lg text-gray-400 mb-10">Join 12,340+ students who've found their ideal living match</p>
            <Link to="/register" className="inline-block px-8 py-4 bg-white text-black rounded-lg hover:bg-gray-100 transition-all font-semibold shadow-sm hover:shadow-md">
              Get Started Today
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-gray-900">LiviSync</span>
              </div>
              <p className="text-sm text-gray-600">© 2026 LiviSync. Finding roommates, one match at a time.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

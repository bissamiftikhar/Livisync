import { Link, useNavigate } from 'react-router';
import { Home, Mail, Lock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Demo navigation based on role
    if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'hostel-owner') {
      navigate('/hostel-owner');
    } else {
      navigate('/student');
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mb-12 hover:opacity-75 transition-opacity w-fit">
          <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-black">LiviSync</span>
        </Link>

        {/* Card */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Sign In</h1>
          <p className="text-gray-600">Access your account to continue</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Role Select */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-3">I'm a</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'student', label: 'Student' },
                { value: 'hostel-owner', label: 'Hostel Owner' },
                { value: 'admin', label: 'Admin' }
              ].map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setRole(opt.value)}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-all ${
                    role === opt.value
                      ? 'bg-black text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
              required
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 font-semibold transition-colors flex items-center justify-center gap-2 mt-8"
          >
            Sign In <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
          </div>
        </div>

        {/* Register Link */}
        <Link to="/register" className="w-full py-3 border border-gray-300 text-gray-900 rounded-lg hover:bg-gray-50 font-semibold transition-colors text-center block">
          Create Account
        </Link>
      </div>
    </div>
  );
}

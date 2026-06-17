import { Link, useNavigate } from 'react-router';
import { Home, Users, Building2, Mail, Lock, Phone, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const handleRoleSelect = (selectedRole: string) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // Navigate based on role
    if (role === 'student') {
      navigate('/student');
    } else if (role === 'hostel-owner') {
      navigate('/hostel-owner');
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

        {/* Progress Bar */}
        {step === 2 && (
          <div className="mb-8 flex items-center gap-3">
            <button
              onClick={() => setStep(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex-1">
              <div className="flex gap-2 mb-2">
                <div className="flex-1 h-1 bg-black rounded-full" />
                <div className="flex-1 h-1 bg-gray-200 rounded-full" />
              </div>
              <p className="text-xs text-gray-600">Step {step} of 2</p>
            </div>
          </div>
        )}

        {/* Step 1: Role Selection */}
        {step === 1 && (
          <div>
            <h1 className="text-4xl font-bold mb-3 text-gray-900">Join LiviSync</h1>
            <p className="text-gray-600 mb-10">Choose your role to get started</p>

            <div className="space-y-3">
              {/* Student Card */}
              <button
                onClick={() => handleRoleSelect('student')}
                className="w-full p-5 border border-gray-200 rounded-lg hover:border-black hover:bg-black/2 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Users className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">I'm a Student</h3>
                    <p className="text-gray-600 text-sm">Find compatible roommates and verified hostels</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>

              {/* Hostel Owner Card */}
              <button
                onClick={() => handleRoleSelect('hostel-owner')}
                className="w-full p-5 border border-gray-200 rounded-lg hover:border-black hover:bg-black/2 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">I'm a Hostel Owner</h3>
                    <p className="text-gray-600 text-sm">List your property and connect with students</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors flex-shrink-0 mt-1" />
                </div>
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-10">
              Already have an account?{' '}
              <Link to="/login" className="font-semibold text-gray-900 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        )}

        {/* Step 2: Account Creation */}
        {step === 2 && (
          <div>
            <h1 className="text-4xl font-bold mb-3 text-gray-900">Create Account</h1>
            <p className="text-gray-600 mb-10">
              Registering as a {role === 'student' ? 'Student' : 'Hostel Owner'}
            </p>

            <form onSubmit={handleRegister} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  required
                />
              </div>

              {/* Create Account Button */}
              <button
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-900 font-semibold transition-colors mt-8"
              >
                Create Account
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { signIn } from 'next-auth/react';

type RegistrationFormData = {
  email: string;
  password: string;
  website?: string;
  emailContact: string;
  phoneContact: string;
  contactPreference: string;
};

export default function Registration() {
  const { register, handleSubmit, formState: { errors } } = useForm<RegistrationFormData>();
  const router = useRouter();

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      // Hash the password
      const hashedPassword = await bcrypt.hash(data.password, 10);

      // Save to database (using fetch to Next.js API route)
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          password: hashedPassword,
          website: data.website,
          emailContact: data.emailContact,
          phoneContact: data.phoneContact,
          contactPreference: data.contactPreference,
        }),
      });

      if (response.ok) {
        // Sign in the user after registration
        await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false,
        });
        router.push('/profile'); // Redirect to profile setup page
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="bg-brown-700 rounded-lg font-sans p-6 mt-2 mb-2 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Stylist Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-lg font-medium mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div>
          <label className="block text-lg font-medium mb-1">Password</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
            className="w-full p-2 border rounded"
          />
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        </div>

        {/* Website (Optional) */}
        <div>
          <label className="block text-lg font-medium mb-1">Website (Optional)</label>
          <input
            type="url"
            {...register('website')}
            className="w-full p-2 border rounded"
            placeholder="https://yourwebsite.com"
          />
        </div>

        {/* Contact Information */}
        <div>
          <label className="block text-lg font-medium mb-1">Email Contact</label>
          <input
            type="email"
            {...register('emailContact', { required: 'Email contact is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.emailContact && <p className="text-red-600">{errors.emailContact.message}</p>}
        </div>
        <div>
          <label className="block text-lg font-medium mb-1">Phone Contact</label>
          <input
            type="tel"
            {...register('phoneContact', { required: 'Phone contact is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.phoneContact && <p className="text-red-600">{errors.phoneContact.message}</p>}
        </div>

        {/* Contact Preference */}
        <div>
          <label className="block text-lg font-medium mb-1">Preferred Contact Method</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                value="email"
                {...register('contactPreference', { required: 'Please select a contact preference' })}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                value="phone"
                {...register('contactPreference')}
              />
              Phone
            </label>
          </div>
          {errors.contactPreference && <p className="text-red-600">{errors.contactPreference.message}</p>}
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Next: Upload Media
        </button>
      </form>

      {/* Placeholder for Requirements */}
      <div className="mt-6">
        <p className="mb-4">Next Steps:</p>
        <p className="mb-4">1. Upload a profile picture (your face must be visible).</p>
        <p className="mb-4">2. Capture 4–10 photos of your work directly with your device camera (uploading existing photos is not allowed).</p>
        <p className="mb-4">3. Record at least one 10-minute video of you styling hair, showing your face. Your profile will not be visible until this is completed.</p>
      </div>
    </div>
  );
}
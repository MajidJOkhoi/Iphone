import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Robot from '../../assets/herobg.png'; 

export function SignUp() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${Robot})` }}
    >
    

      <div className="relative z-10 mx-auto  border-2 border-white rounded-3xl p-8 w-full max-w-[400px] space-y-8">
      
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}> SignUp  </h1>
          <p className="text-gray-400">
            Enter your details to create your account
          </p>
        </div>

     
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-300">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              required
              className="bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
              className="bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none rounded-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Password</Label>
            <Input
              id="password"
              type="password"
              required
              className="bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none rounded-md"
            />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-lg font-semibold py-2 rounded-md">
            Signup
          </Button>
        </div>

        {/* Signup Link */}
        <div className="mt-6 text-center text-sm">
          have an account?{" "}
          <a href="/login" className="underline text-purple-500 hover:text-purple-400">
          Login 
          </a>
        </div>
      </div>
    </div>
  );
}

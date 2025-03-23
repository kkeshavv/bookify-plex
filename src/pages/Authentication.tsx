
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen } from 'lucide-react';

const Authentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Image */}
      <div className="hidden md:block md:w-1/2 bg-primary/5 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5"></div>
        <div className="absolute inset-0 flex items-center justify-center p-12">
          <div className="max-w-md text-center">
            <BookOpen className="h-20 w-20 text-primary mx-auto mb-8" />
            <h1 className="text-4xl font-bold mb-6">Discover Your Next Great Read</h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of readers who discover new books through our AI-powered recommendation engine.
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Section - Authentication Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 animate-fade-up">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block mb-8">
              <span className="text-2xl font-bold text-primary">bookify</span>
            </Link>
            <h2 className="text-3xl font-bold tracking-tight">Welcome back</h2>
            <p className="mt-2 text-muted-foreground">
              Sign in to your account or create a new one
            </p>
          </div>
          
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            
            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" placeholder="••••••••" required />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
                
                <div className="mt-4 text-center text-sm">
                  <span className="text-muted-foreground">Don't have an account? </span>
                  <button type="button" className="text-primary hover:underline" onClick={() => document.getElementById('register-tab')?.click()}>
                    Sign up
                  </button>
                </div>
              </form>
            </TabsContent>
            
            {/* Register Form */}
            <TabsContent value="register">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-email">Email</Label>
                  <Input id="register-email" type="email" placeholder="name@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="register-password">Password</Label>
                  <Input id="register-password" type="password" placeholder="••••••••" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" placeholder="••••••••" required />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Creating account..." : "Create Account"}
                </Button>
                
                <div className="mt-4 text-center text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <button type="button" className="text-primary hover:underline" onClick={() => document.getElementById('login-tab')?.click()}>
                    Sign in
                  </button>
                </div>
              </form>
            </TabsContent>
          </Tabs>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" fill="currentColor"/>
              </svg>
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <svg className="mr-2 h-4 w-4" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              GitHub
            </Button>
          </div>
          
          <p className="text-center text-xs text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

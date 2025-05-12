"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FiTrendingUp, FiPackage, FiClock } from 'react-icons/fi'
import AnimatedTitle from '@/components/AnimatedTitle'
import GradientText from '@/components/GradientText'
import AnimatedCard from '@/components/AnimatedCard'

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-100 to-primary-200 pt-16 pb-24">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
              <AnimatedTitle 
                text="Fresh, healthy, delicious" 
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight"
              />
            </div>
            <p className="text-xl text-primary-800 animate-slide-up opacity-0" style={{ animationDelay: '0.7s' }}>
              Energize every meal with our premium, nutrient-rich salads made from locally sourced ingredients.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-up opacity-0" style={{ animationDelay: '1s' }}>
              <Link href="/menu" className="btn btn-primary">
                View Menu
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            <Image 
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Fresh salad bowl with various vegetables and toppings" 
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center text-primary-800 mb-12 shadow-text">
            Why Choose <GradientText text="Salad" className="text-3xl" />?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <AnimatedCard delay={100} className="card p-8 flex flex-col items-center text-center transition hover:shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 animate-bounce-slow">
                <FiTrendingUp size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-800 mb-2">Premium Ingredients</h3>
              <p className="text-gray-600">
                We source the freshest, locally grown ingredients to ensure maximum nutrition and flavor in every bite.
              </p>
            </AnimatedCard>

            {/* Feature 2 */}
            <AnimatedCard delay={300} className="card p-8 flex flex-col items-center text-center transition hover:shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 animate-bounce-slow" style={{ animationDelay: "0.2s" }}>
                <FiPackage size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-800 mb-2">Customizable Options</h3>
              <p className="text-gray-600">
                Build your own salad with our wide range of bases, proteins, toppings, and house-made dressings.
              </p>
            </AnimatedCard>

            {/* Feature 3 */}
            <AnimatedCard delay={500} className="card p-8 flex flex-col items-center text-center transition hover:shadow-lg">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4 animate-bounce-slow" style={{ animationDelay: "0.4s" }}>
                <FiClock size={32} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-800 mb-2">Quick Service</h3>
              <p className="text-gray-600">
                Fast preparation and delivery without compromising on quality. Healthy food doesn't have to be slow.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-16 bg-primary-50">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-display font-bold text-primary-800 glowing-text">
              Our <GradientText text="Popular" gradient="from-accent-400 via-accent-600 to-accent-400" /> Selections
            </h2>
            <Link href="/menu" className="btn btn-primary mt-4 md:mt-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              View Full Menu
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <AnimatedCard delay={100} className="card bg-white overflow-hidden transition">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                  alt="Mediterranean Salad" 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-primary-800">Mediterranean Salad</h3>
                  <span className="text-lg font-medium text-primary-600">$12.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Fresh greens, cherry tomatoes, cucumber, olives, feta cheese with lemon herb dressing.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Vegetarian</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">Gluten-Free</span>
                </div>
              </div>
            </AnimatedCard>

            {/* Menu Item 2 */}
            <AnimatedCard delay={300} className="card bg-white overflow-hidden transition">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" 
                  alt="Southwest Protein Bowl" 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-primary-800">Southwest Protein Bowl</h3>
                  <span className="text-lg font-medium text-primary-600">$14.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Grilled chicken, black beans, corn, avocado, quinoa, and chipotle lime dressing.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">High Protein</span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">Gluten-Free</span>
                </div>
              </div>
            </AnimatedCard>

            {/* Menu Item 3 */}
            <AnimatedCard delay={500} className="card bg-white overflow-hidden transition">
              <div className="relative h-64">
                <Image 
                  src="https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80" 
                  alt="Asian Crunch Salad" 
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-display font-bold text-primary-800">Asian Crunch Salad</h3>
                  <span className="text-lg font-medium text-primary-600">$13.99</span>
                </div>
                <p className="text-gray-600 mb-4">
                  Mixed greens, edamame, mandarin oranges, crispy wontons, sesame ginger dressing.
                </p>
                <div className="flex space-x-2">
                  <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded">Vegan Option</span>
                  <span className="px-2 py-1 text-xs bg-orange-100 text-orange-700 rounded">Contains Nuts</span>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-display font-bold text-center text-primary-800 mb-12">
            What Our <GradientText text="Customers" className="text-3xl" gradient="from-primary-400 via-primary-600 to-primary-400" /> Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <AnimatedCard delay={200} className="card p-8">
              <div className="flex items-center space-x-1 text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s`, animationDuration: '1.5s' }}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "The freshest ingredients I've ever had in a salad! My go-to lunch spot now. The Southwest Protein Bowl keeps me energized throughout the day."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-200 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Loyal Customer</p>
                </div>
              </div>
            </AnimatedCard>

            {/* Testimonial 2 */}
            <AnimatedCard delay={400} className="card p-8">
              <div className="flex items-center space-x-1 text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s`, animationDuration: '1.5s' }}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "I love the build-your-own option! As someone with dietary restrictions, it's great to have so many delicious options that fit my needs."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-200 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Michael T.</h4>
                  <p className="text-sm text-gray-500">Daily Customer</p>
                </div>
              </div>
            </AnimatedCard>

            {/* Testimonial 3 */}
            <AnimatedCard delay={600} className="card p-8">
              <div className="flex items-center space-x-1 text-accent-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s`, animationDuration: '1.5s' }}>★</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">
                "Fast delivery and the food is always fresh. The packaging is eco-friendly too which I appreciate. Can't recommend Salad enough!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-200 rounded-full"></div>
                <div>
                  <h4 className="font-bold">Jessica L.</h4>
                  <p className="text-sm text-gray-500">Weekly Order</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container text-center">
          <AnimatedTitle 
            text="Ready to Energize Your Day?" 
            className="text-3xl md:text-4xl font-display font-bold mb-6 text-white"
          />
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.5s' }}>
            Join thousands of happy customers who have made Salad a part of their healthy lifestyle.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
            <Link href="/locations" className="btn bg-white text-primary-600 hover:bg-gray-100">
              Find a Location
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
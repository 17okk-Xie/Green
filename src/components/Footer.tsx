"use client"

import React from 'react'
import Link from 'next/link'
import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-white">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
                  <path d="M7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 7C13.6569 7 15 5.65685 15 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-2xl font-display font-bold">Salad</span>
            </div>
            <p className="text-primary-100">Fresh, healthy, delicious – energize every meal with our premium salads and bowls.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-accent-300">
                <FiInstagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-accent-300">
                <FiFacebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-accent-300">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/menu/salads" className="text-primary-100 hover:text-white">Signature Salads</Link></li>
              <li><Link href="/menu/bowls" className="text-primary-100 hover:text-white">Protein Bowls</Link></li>
              <li><Link href="/menu/build-your-own" className="text-primary-100 hover:text-white">Build Your Own</Link></li>
              <li><Link href="/menu/sides" className="text-primary-100 hover:text-white">Sides</Link></li>
              <li><Link href="/menu/drinks" className="text-primary-100 hover:text-white">Drinks & Smoothies</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-primary-100 hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="text-primary-100 hover:text-white">Careers</Link></li>
              <li><Link href="/sustainability" className="text-primary-100 hover:text-white">Sustainability</Link></li>
              <li><Link href="/locations" className="text-primary-100 hover:text-white">Store Locations</Link></li>
              <li><Link href="/franchise" className="text-primary-100 hover:text-white">Franchise Info</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Green Street</li>
              <li>New York, NY 10001</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: hello@saladco.com</li>
            </ul>
            <Link href="/contact" className="inline-block mt-4 text-accent-300 hover:text-accent-200">
              Send us a message
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-12 pt-6 text-sm text-primary-200">
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <p>&copy; {new Date().getFullYear()} Salad Co. All rights reserved.</p>
            <div className="space-x-6">
              <Link href="/privacy" className="text-primary-200 hover:text-white">Privacy Policy</Link>
              <Link href="/terms" className="text-primary-200 hover:text-white">Terms of Service</Link>
              <Link href="/accessibility" className="text-primary-200 hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
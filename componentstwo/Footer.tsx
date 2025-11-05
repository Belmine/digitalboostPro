

import React from 'react';
import { Play, ArrowRight, Search, Share2, Target, BarChart3, Megaphone, Globe, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';



export default function Footer() {

    return(
        <>    

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-green-600 rounded-lg mr-4 flex items-center justify-center">
                  <div className="w-5 h-5 bg-white rounded-sm"></div>
                </div>
                <div className="text-2xl font-bold">DigitalBoost Pro</div>
              </div>
              
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Votre partenaire de confiance pour transformer votre présence digitale 
                et accélérer votre croissance en ligne. Expertise, innovation et résultats garantis.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">SEO & Référencement</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Google Ads</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Social Media</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Content Marketing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Analytics & Data</a></li>
                <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Développement Web</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">+229 41 68 47 90 </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">contact@digitalboostpro.fr</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <span className="text-gray-300">
                    123 Cocotomey 2e rue après LokiBank <br />
                    75008 Bénin, Afrique
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 DigitalBoost Pro. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </footer>
  
        
        </>
        
    )
}
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Logo_Name from "@/Components/Logo_Name";

export default function Home() {
  return (
    <>
      <div
        className="
          bg-gradient-to-br from-[#C9E7FF] via-[#FDE2FF] to-[#FFD6A5] 
          w-full min-h-screen relative overflow-x-hidden
        "
      >


        {/* ============================= */}
        {/*        HEADER SECTION         */}
        {/* ============================= */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.25 }}
          className="w-full flex flex-col sm:flex-row items-center justify-between px-3 sm:px-6 md:px-8 pt-6"
        >
          <div className="mb-3 sm:mb-0 scale-90 sm:scale-100">
            <Logo_Name />
          </div>

          <div className="flex gap-3 md:gap-4">
            {/* LOGIN BUTTON HOVER UPGRADED */}
            <Link href="/login">
              <button className="
                text-heading bg-gradient-to-r from-violet-300 to-pink-300 
                font-bold rounded-full text-sm sm:text-base md:text-sm 
                px-6 py-4 sm:px-7 sm:py-2.5 shadow-md cursor-pointer
                transition-all duration-300
                hover:scale-110 hover:shadow-lg hover:brightness-110
              ">
                Login
              </button>
            </Link>

            {/* SIGNUP BUTTON HOVER UPGRADED */}
            <Link href="/signup">
              <button className="
                text-heading bg-gradient-to-r from-violet-300 to-pink-300 
                font-bold rounded-full text-sm sm:text-base md:text-sm 
                px-6 py-4 sm:px-7 sm:py-2.5 shadow-md cursor-pointer
                transition-all duration-300
                hover:scale-110 hover:shadow-lg hover:brightness-110
              ">
                Sign Up
              </button>
            </Link>
          </div>
        </motion.div>




        {/* ============================= */}
        {/*          HERO SECTION         */}
        {/* ============================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.25 }}
          className="flex flex-col items-center justify-center px-6 mt-20"
        >
          <h1 className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold text-[#6e6255] leading-tight">
            TrendOra- Your Smart Shopping Destination
            
          </h1>
        </motion.div>

        {/* CTA BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.25 }}
          className="flex justify-center mt-10"
        >
          <Link href="/shopping">
            <button
              className="px-10 py-4 text-lg sm:text-xl font-semibold rounded-full
                bg-gradient-to-br from-[#d5dae6] via-[#ce3e9e] to-[#312E81]
                shadow-[0_8px_20px_rgba(255,150,100,0.45)]
                hover:scale-110 hover:shadow-[0_12px_30px_rgba(255,150,100,0.65)]
                hover:from-[#ce3e9e] hover:via-[#312E81] hover:to-[#d5dae6]
                transition-all duration-300 text-white
                active:scale-95 cursor-pointer"
            >
              Start Shopping
            </button>
          </Link>
        </motion.div>






        {/* ============================= */}
        {/*       FEATURE SECTION         */}
        {/* ============================= */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.25 }}
          className="mt-24 px-6 text-center"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                Why Shop With TrendOra?
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                title: "Insight-Driven Picks",
                desc: "Smart picks tailored for you.",
                img: "https://images.prismic.io//intuzwebsite/ZgOpH8cYqOFdyGp4_UnleashingthePotentialofOpenAI%27sSorainEducation-1-.png?w=2400&q=80&auto=format,compress&fm=png8",
              },
              {
                title: "Fast Delivery",
                desc: "Lightning-fast doorstep delivery.",
                img: "https://t3.ftcdn.net/jpg/02/61/05/22/360_F_261052228_JWWd2a1m0bahg7IKqigyS6k2059oSqVc.jpg",
              },
              {
                title: "Exclusive Discounts",
                desc: "Exclusive discounts just for you.",
                img: "https://img.freepik.com/free-photo/close-up-woman-holding-shopping-bags_23-2149220711.jpg",
              },
              {
                title: "Secure Payments",
                desc: "Trusted & encrypted checkout.",
                img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ amount: 0.25 }}
                className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg 
                  hover:shadow-2xl hover:scale-105 transition-all duration-300 
                  relative overflow-hidden cursor-pointer"
              >
                <img src={item.img} className="w-full h-36 object-cover rounded-md mb-4" />

                {/* LOGO MOVED TO BOTTOM-RIGHT */}
                <Image
                  src="/Images/Logo1.png"
                  alt="trendora"
                  width={35}
                  height={35}
                  className="absolute bottom-3 right-3 opacity-90 drop-shadow-lg"
                />

                <h3 className="font-bold text-xl text-gray-800">{item.title}</h3>
                <p className="text-gray-700 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>






        {/* ============================= */}
        {/*      NEW ARRIVALS IMAGES      */}
        {/* ============================= */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.25 }}
          className="mt-28 px-6 text-center"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                New Arrivals
              </span>
              <span>✨</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            {[
              { img: "https://s.wsj.net/public/resources/images/OD-BR365_RETRO_M_20180403173324.jpg", name: "Classic Sneakers" },
              { img: "https://cdn.thewirecutter.com/wp-content/media/2025/09/BEST-IPHONE-SMARTWATCHES-9166.jpg?auto=webp&quality=75&crop=1.91:1&width=1200", name: "Smartwatch Pro" },
              { img: "https://megaapparel.com/blog/wp-content/uploads/2024/10/men-women-hoodies.jpg", name: "Unisex Hoodie" },
              { img: "https://images.squarespace-cdn.com/content/v1/62f3952b099e4f55ffd5010e/1660132161113-V2WABMF1E85E2CX8PXTA/image-asset.jpeg", name: "Premium Sunglasses" },
              { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500", name: "Wireless Headphones" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ amount: 0.25 }}
                className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-4 
                  relative hover:shadow-2xl hover:scale-105 transition-all duration-300 
                  overflow-hidden cursor-pointer"
              >
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-lg" />

                {/* LOGO MOVED TO BOTTOM-RIGHT */}
                <Image
                  src="/Images/Logo1.png"
                  alt="trendora"
                  width={32}
                  height={32}
                  className="absolute bottom-3 right-3 opacity-90 drop-shadow-lg"
                />

                <h4 className="font-bold mt-3 text-gray-800">{item.name}</h4>
          
              </motion.div>
            ))}
          </div>
        </motion.section>







        {/* ============================= */}
        {/*     TRENDING PRODUCTS IMG     */}
        {/* ============================= */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.25 }}
          className="mt-28 px-6 text-center"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600">
                Trending Now
              </span>
              <span>🔥</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {[
              { img: "https://www.shutterstock.com/image-photo/happy-children-winter-clothes-sitting-260nw-2537438907.jpg", name: "Winter Clothing" },
              { img: "https://i.ytimg.com/vi/Onn9NHmft78/maxresdefault.jpg", name: "AI Smart Vision Glasses" },
              { img: "https://g.sdlcdn.com/imgs/j/s/f/Velbury-Led-temperature-bottle-Multicolour-SDL076599299-1-368fc.jpg?trim=10&w=850&h=995&sharp=7", name: "Thermo Glow Bottle" },
              { img: "https://mywakeup.in/cdn/shop/collections/1693460515.png?v=1709624789&width=1296", name: "Modern Furniture" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ amount: 0.25 }}
                className="p-5 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg 
                  hover:shadow-2xl hover:scale-105 transition-all duration-300 
                  relative overflow-hidden cursor-pointer"
              >
                <img src={item.img} alt={item.name} className="w-full h-40 rounded-lg object-cover" />

                {/* LOGO MOVED TO BOTTOM-RIGHT */}
                <Image
                  src="/Images/Logo1.png"
                  alt="brand"
                  width={32}
                  height={32}
                  className="absolute bottom-3 right-3 opacity-90 drop-shadow-lg"
                />

                <p className="font-bold mt-3 text-gray-800">{item.name}</p>

              </motion.div>
            ))}
          </div>
        </motion.section>







        {/* ============================= */}
        {/*    DEALS OF THE WEEK IMG      */}
        {/* ============================= */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ amount: 0.25 }}
          className="mt-28 px-6 text-center"
        >
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold flex items-center justify-center gap-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-teal-600 to-blue-600">
                Deals of The Week
              </span>
              <span>💰</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 rounded-full mt-2"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { img: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500", name: "Gaming Laptop" },
              { img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500", name: "Premium Watch" },
              { img: "https://www.shutterstock.com/image-photo/fashion-details-fluffy-black-brown-260nw-2551348413.jpg", name: "Winter Jackets" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                viewport={{ amount: 0.25 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg 
                  hover:shadow-2xl hover:scale-105 transition-all duration-300 
                  relative overflow-hidden cursor-pointer"
              >
                <img src={item.img} alt={item.name} className="h-40 w-full rounded-lg object-cover" />

                {/* LOGO MOVED TO BOTTOM-RIGHT */}
                <Image
                  src="/Images/Logo1.png"
                  alt="brand"
                  width={35}
                  height={35}
                  className="absolute bottom-3 right-3 opacity-90 drop-shadow-lg"
                />

                <p className="font-bold text-lg mt-3 text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-700">Limited time offer</p>

                <button className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white 
                  px-6 py-2 rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 font-semibold cursor-pointer">
                  Shop Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.section>








        {/* ============================= */}
        {/* FOOTER WITH YOUR NAME         */}
        {/* ============================= */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.25 }}
          className="mt-28 text-center text-gray-700 pb-10"
        >
          <p className="font-semibold text-lg">
            Designed & Developed by{" "}
            <span className="font-bold text-purple-600">Sneha Sharma</span>
          </p>
          <p className="text-sm opacity-80 mt-1">© 2025 TrendOra • All Rights Reserved</p>
        </motion.footer>


        <div className="h-[150px]"></div>
      </div>
    </>
  );
}

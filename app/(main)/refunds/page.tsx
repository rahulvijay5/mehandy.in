import React from 'react'
import Link from 'next/link'
// import Image from 'next/image'

const RefundsPage = () => {
  return (
    <main className=" bg-white py-16">
      <div className="container-custom max-w-4xl mx-auto px-4">
        <div className="bg-[#FFF6EA] p-8 md:p-12 rounded-xl shadow-lg">
          <h1 className="title-font text-4xl md:text-5xl text-[#FF4B91] mb-8 text-center">Refund Policy</h1>
          
          {/* <div className="flex flex-col items-center mb-10">
            <div className="relative w-32 h-32 mb-6">
              <Image 
                src="/mandana.avif" 
                alt="Mandana Design" 
                fill 
                className="object-contain opacity-50"
              />
            </div>
          </div> */}
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <h2 className="text-2xl text-[#FF4B91] font-bold mb-4">No Refund Policy</h2>
              <p className="text-lg">
                At Mehandy.in, we currently do not offer refunds for any purchased courses or services or products. 
                All sales are final once the transaction is complete.
              </p>
            </div>
            
              
              <div className="bg-[#ffecda] p-6 rounded-lg my-8">
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p>
                  If you have any questions about this policy, please contact us through the information 
                  provided on our website.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link href="/" className="text-[#FF4B91] hover:underline">
                Back to Home
              </Link>
              <div className="flex space-x-4">
                <Link href="/privacy-policy" className="text-[#FF4B91] hover:underline">
                  Privacy Policy
                </Link>
                <Link href="/tnc" className="text-[#FF4B91] hover:underline">
                  Terms &amp; Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
    </main>
  )
}

export default RefundsPage
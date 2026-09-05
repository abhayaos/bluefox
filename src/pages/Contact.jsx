import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { FiMail, FiMapPin } from 'react-icons/fi'

function Contact() {
  return (
    <section className="flex-1 overflow-hidden bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="lg:w-8/12">
          <div className="px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[55px]">
            <h2 className="mb-3 text-3xl font-bold text-gray-900">
              Contact Us
            </h2>
            <p className="mb-8 text-base font-medium text-gray-600">
              We are always ready to help with any queries regarding our
              services. Feel free to contact us.
            </p>

            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold leading-tight text-gray-900">
                <FaPhone className="text-primary" size={18} />
                General query or collaboration
              </h3>
              <p className="mb-2 text-base font-medium text-gray-600">
                Please contact us for the general queries or collaboration
                using the below information:
              </p>
              <p className="text-primary font-medium">
                Phone: <a href="tel:9817303073" className="hover:underline">9817303073</a> / <a href="tel:9802755603" className="hover:underline">9802755603</a>
              </p>
              <p className="text-primary font-medium">
                Email: <a href="mailto:bluefoxpvtltd@gmail.com" className="hover:underline">bluefoxpvtltd@gmail.com</a>
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold leading-tight text-gray-900">
                <FiMapPin className="text-primary" size={18} />
                Visit our office
              </h3>
              <p className="text-base font-medium text-gray-600">
                Blue Fox Pvt Ltd, Itahari-6 Paruhang Chowk, Nepal
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-bold leading-tight text-gray-900">
                <FiMail className="text-primary" size={18} />
                Community feedback
              </h3>
              <p className="text-base font-medium text-gray-600">
                If you have any suggestions or ways to improve our services or
                any online presence feel free to{' '}
                <a href="mailto:bluefoxpvtltd@gmail.com" className="text-primary underline hover:text-primary-700">
                  send us your feedback
                </a>{' '}
                as we are always open for feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
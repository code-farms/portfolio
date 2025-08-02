import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [state, handleSubmit] = useForm("xpznpoak");

  if (state.succeeded) {
    return (
      <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg text-center">
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Thank you!</h3>
        <p className="text-gray-700 dark:text-gray-300">Your message has been sent. I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-200"
            placeholder="Enter your email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-500 mt-1" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none transition-colors duration-200"
            placeholder="Tell me about your project or just say hello!"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-red-500 mt-1" />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:transform-none"
        >
          {state.submitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
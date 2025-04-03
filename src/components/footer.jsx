//footer items


const Footer = () => { 
    return (
      <footer className="bg-gradient-to-b from-blue-200 to-purple-400 text-white py-6 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          
          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-xl font-semibold">Muhammad Ali Shahid</h2>
            <p className="text-gray-600">Frontend Developer | Next.js | TypeScript</p>
          </div>
  
          {/* Social Links */}
          <div className="flex gap-4">
            <a href="https://github.com/m-Alishahid" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.8 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.6-3.9-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.6 1 1.6 1 .9 1.6 2.5 1.1 3.1.8.1-.6.4-1.1.7-1.3-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.6 3.3-1.2 3.3-1.2.6 1.5.2 2.7.1 3 .7.8 1.2 1.9 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.3.8 1 .8 2v2.9c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.9C23.5 5.6 18.4.5 12 .5z"/></svg>
            </a>
            <a href="mailto:alishahids519@gmail.com" className="hover:text-blue-500">
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.713l11.985-7.905A.75.75 0 0 0 23.25 4H.75a.75.75 0 0 0-.735.808l11.985 7.905zM12 14.45L.25 6.58v12.67a.75.75 0 0 0 .75.75h22a.75.75 0 0 0 .75-.75V6.58L12 14.45z"/></svg>
            </a>
            <a href="https://instagram.com/codecraftali" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.2c3.1 0 3.5 0 4.7.1 1.1.1 1.8.2 2.2.4.5.2.9.4 1.3.8.4.4.6.8.8 1.3.2.4.3 1 .4 2.2.1 1.2.1 1.6.1 4.7s0 3.5-.1 4.7c-.1 1.1-.2 1.8-.4 2.2-.2.5-.4.9-.8 1.3-.4.4-.8.6-1.3.8-.4.2-1 .3-2.2.4-1.2.1-1.6.1-4.7.1s-3.5 0-4.7-.1c-1.1-.1-1.8-.2-2.2-.4-.5-.2-.9-.4-1.3-.8-.4-.4-.6-.8-.8-1.3-.2-.4-.3-1-.4-2.2-.1-1.2-.1-1.6-.1-4.7s0-3.5.1-4.7c.1-1.1.2-1.8.4-2.2.2-.5.4-.9.8-1.3.4-.4.8-.6 1.3-.8.4-.2 1-.3 2.2-.4 1.2-.1 1.6-.1 4.7-.1m0-2.2c-3.2 0-3.6 0-4.8.1-1.2.1-2.1.2-2.9.5-.8.3-1.5.8-2.2 1.5a5.6 5.6 0 0 0-1.5 2.2c-.3.8-.4 1.7-.5 2.9-.1 1.2-.1 1.6-.1 4.8s0 3.6.1 4.8c.1 1.2.2 2.1.5 2.9.3.8.8 1.5 1.5 2.2.7.7 1.4 1.2 2.2 1.5.8.3 1.7.4 2.9.5 1.2.1 1.6.1 4.8.1s3.6 0 4.8-.1c1.2-.1 2.1-.2 2.9-.5.8-.3 1.5-.8 2.2-1.5.7-.7 1.2-1.4 1.5-2.2.3-.8.4-1.7.5-2.9.1-1.2.1-1.6.1-4.8s0-3.6-.1-4.8c-.1-1.2-.2-2.1-.5-2.9-.3-.8-.8-1.5-1.5-2.2a5.6 5.6 0 0 0-2.2-1.5c-.8-.3-1.7-.4-2.9-.5-1.2-.1-1.6-.1-4.8-.1zM12 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.3a4.1 4.1 0 1 1 0-8.2 4.1 4.1 0 0 1 0 8.2zm6.4-10.5a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8z"/>
</svg>

            </a>
          </div>
          
        </div>
  
        {/* Copyright */}
        <div className="mt-6 text-center text-gray-700 text-sm">
          © 2025 Muhammad Ali Shahid. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;

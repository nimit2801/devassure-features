import React from 'react';
import {SiFacebook, SiInstagram, SiX, SiYoutube} from '@icons-pack/react-simple-icons';
const DigitalStudioLanding: React.FC = () => {

  const goto = (url: string) => {
    // new window should open with that url
    window.open(url, '_blank');
  }
  return (
    <div className="bg-yellow-300 min-h-screen p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-6xl font-bold mb-4">We are</h1>
          <div className="text-4xl font-bold border-2 border-black rounded-full inline-block px-4 py-2 mb-4">
            digital
          </div>
          <h1 className="text-6xl font-bold">studio</h1>
        </header>

        <main className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="mb-8">
              {[1, 2, 3].map((num) => (
                <div key={num} className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">0{num} Title {num}</h2>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id
                    elementum. Quam vel aliquam sit vulputate.
                  </p>
                </div>
              ))}
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-semibold" onClick={() => {
              // just refresh the page
              window.location.reload();
            }}>
              Get started
            </button>
          </div>

          <div className="col-span-1 flex items-end justify-between">
            <div className="flex space-x-4 items-center border-2 border-black rounded-full px-6 py-2">
              <span className="font-bold text-xl">113+</span>
              <span className="font-bold text-xl">274K</span>
              <span className="font-bold text-xl">179+</span>
            </div>
            <div className="flex space-x-2">
              <button className="border-2 border-black rounded-full p-2" onClick={() => goto('https://facebook.com')}>
                <SiFacebook />
              </button>
              <button className="border-2 border-black rounded-full p-2" onClick={() => goto('https://twitter.com')}>
                <SiX />
              </button>
              <button className="border-2 border-black rounded-full p-2" onClick={() => goto('https://instagram.com')}>
                <SiInstagram  />
              </button>
              <button className="border-2 border-black rounded-full p-2" onClick={() => goto('https://youtube.com')}>
                <SiYoutube />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DigitalStudioLanding;
import Head from 'next/head';
import "../styles/Home.module.css";

const now = new Date();
const year = now.getFullYear();

function HeaderLogo() {
  return (
    <img style={{ width: 160 }} src="/imajinr.svg" />
  );
}

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Imajinr - We turn your product ideas into reality</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="py-8">
          <HeaderLogo />
        </nav>
      </header>
      

      <section className="py-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <h1 className="text-6xl font-bold mb-8">
              <span className="block mb-6">Your imagination</span><span>We craft it into a reality</span>
              </h1>
            <p className="text-xl mb-6 text-gray-300">We are lorem ipsum sit amet dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <button className="text-xl rounded-full border px-5 py-4 border-white hover:bg-im-blue-1 hover:border-im-blue-1 transition-colors">Chat With Us</button>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-2">
            <h2 className="text-4xl font-bold mb-10">Our Finest Craft</h2>
            <h3 className="text-3xl font-bold mb-4">DeliverIT</h3>

            <p className="leading-8 text-xl mb-6">DeliverIT enables business to ship their packages across singapore. With various logistic partners, business could ship faster and cheaper.</p>

            <button className="text-xl rounded-full border px-5 py-4 border-white hover:bg-im-blue-1 hover:border-im-blue-1 transition-colors">See The Case</button>
          </div>
          <div className="col-span-3">
            <img src="/img-ui-dashboard.png" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-10">
          <h2 className="font-bold text-4xl text-center mb-4">Why us?</h2>
          <p className="text-center text-xl text-gray-300">Lorem ipsum sit amet dolor</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Very Talented Team</h3>
            <p className="text-center text-xl">Lorem ipsum sit amet dolor</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Best Practices</h3>
            <p className="text-center text-xl">Lorem ipsum sit amet dolor</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Collaborative</h3>
            <p className="text-center text-xl">Lorem ipsum sit amet dolor</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-10">
          <h2 className="font-bold text-4xl text-center mb-4">What we offer</h2>
          <p className="text-center text-xl text-gray-300">Lorem ipsum sit amet dolor</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Product Development</h3>
            <p className="text-center text-xl">Lorem ipsum sit amet dolor</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Team Scaling</h3>
            <p className="text-center text-xl">Lorem ipsum sit amet dolor</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">DevOps</h3>
            <p className="text-center text-xl">Lorem ipsum sit amet dolor</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-10">
          <h2 className="font-bold text-4xl text-center mb-4">What our clients said</h2>
          <p className="text-center text-xl text-gray-300">Lorem ipsum sit amet dolor</p>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <div className="grid grid-cols-3 gap-12">
              <div className="col-span-1">
                <div className="flex justify-end">
                  <div>
                    <img className="mx-auto" style={{ width: 72, height: 72 }} src="/leo-client.png" />  
                    <div className="mt-4 text-lg text-center">
                      <p className="font-bold">Leon Harris</p>
                      <p className="text-gray-300">CEO, DeliverIT</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-xl">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="pt-16 pb-8">
        <div className="mb-12 flex text-xl">
          <div className="flex-1"></div>
          <div className="flex-1 text-right">
            <p>Jl. Kijang Utara III No. 13</p>
            <p>Palu 94231</p>
            <p>Indonesia</p>
            <p>Tel +62 852 2557 5696</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex-1">
            <img style={{ width: 160 }} src="/imajinr.svg" />
          </div>
          <div className="flex-1text-right">
            <p>&copy; {year} PT Benih Kriya Imajiner. All rights reserved</p>
          </div>
        </div>
        
      </footer>
    </div>
  )
}

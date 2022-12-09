import Head from 'next/head';
import style from "./index.module.css";
console.log(style)
const now = new Date();
const year = now.getFullYear();

// case study refs:
// https://gits.id/
// https://www.webarq.com/projects/sushi-tei
// https://icehousecorp.com/work/bluebird/

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
              <span className="block mb-6 text-im-blue-2">Your imagination</span><span>We craft it into a reality</span>
              </h1>
            <p className="text-xl mb-6 text-gray-300">We are software-consulting company which has specialty in building and developing product for early-stage product. Our experienced engineers can build mobile or web-based solution for Your company.</p>
            <a href="mailto:abdi.pratama@imajinr.com" className="inline-block text-xl rounded-full border px-5 py-4 border-white hover:bg-im-blue-1 hover:border-im-blue-1 transition-colors">Chat With Us</a>
          </div>
          <div className="col-span-1"></div>
        </div>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-2">
            <h2 className={style.workTitle}>Our Finest Craft</h2>
            <h3 className="text-3xl font-bold mb-4">DeliverIT</h3>

            <p className="leading-8 text-xl mb-6">DeliverIT enables business to ship their packages across singapore. With various logistic partners, business could ship faster and cheaper.</p>

            <button className="text-xl rounded-full border px-5 py-4 border-white hover:bg-im-blue-1 hover:border-im-blue-1 transition-colors">See The Case</button>
          </div>
          <div className="col-span-3 flex items-end">
            <img src="/deliverit_1.png" />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-10">
          <h2 className="font-bold text-4xl text-center mb-4">Why us?</h2>
          <p className="text-center text-xl text-gray-300">Get to know on Why we are right partner for You</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Talented Team</h3>
            <p className="text-center text-xl">With 12+ years combined experience in technology industry, We can bring high quality work to help you to deliver successful solution.</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Best Practices</h3>
            <p className="text-center text-xl">We don't just build, but We craft it with best practices. Our engineers have proven experience in industry.</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Collaborative</h3>
            <p className="text-center text-xl">We always keep effective communication in order to be in the right track and ultimately to able to deliver the desirable product.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-10">
          <h2 className="font-bold text-4xl text-center mb-4">What we offer</h2>
          <p className="text-center text-xl text-gray-300">Different problem, different solution. Choose the right one for You</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Product Development</h3>
            <p className="text-center text-xl">We can turn your idea into a reality. Our experience and expertise could help you launch as fast as possible.</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">Team Scaling</h3>
            <p className="text-center text-xl">Need more help on shipping your product faster? We can give a hand. Our dedicated engineers can act as your team extension.</p>
          </div>
          <div>
            <h3 className="mb-4 text-center text-2xl font-bold">DevOps</h3>
            <p className="text-center text-xl">Your tech is growing? We can make your system handle high load and make your development process agile.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-10">
          <h2 className="font-bold text-4xl text-center mb-4">What our clients said</h2>
        </div>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <div className="grid grid-cols-3 gap-12">
              <div className="col-span-1">
                <div className="flex justify-end">
                  <div>
                    <div className="rounded-full">
                      <img className="mx-auto rounded-full" style={{ width: 80, height: 80 }} src="/jin.jpeg" />  
                    </div>
                    <div className="mt-4 text-lg text-center">
                      <p className="font-bold">Lee Jin</p>
                      <p className="text-gray-300">COO, Tictag.io</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 text-4xl italic">
                <p>"Imajinr provides high-quality Indonesian talents"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mb-10">
          <h2 className="font-bold text-4xl text-center mb-4">Let's build together</h2>
        </div>
        <div className="text-xl text-center">
          <p className="mb-6">If you are ready to start the project, or just having questions for us We are delighted to talk with You!</p>
          <a href="mailto:abdi.pratama@imajinr.com" className="inline-block text-xl rounded-full border px-5 py-4 border-white hover:bg-im-blue-1 hover:border-im-blue-1 transition-colors">Chat Us Now</a>
        </div>
      </section>
      
      <footer className="pt-16 pb-8">
        <div className="mb-12 flex text-xl">
          <div className="flex-1"></div>
          <div className="flex-1 text-right">
            <p>Jl. Kijang Utara III No. 13</p>
            <p>Palu 94231</p>
            <p>Indonesia</p>
            <p>Tel/Whatsapp <a href="https://wa.me/6281281898529">+62 812-8189-8529</a></p>
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

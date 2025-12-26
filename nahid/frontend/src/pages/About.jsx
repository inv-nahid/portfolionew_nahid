import nahidsidemug from '../assets/nahid_sidemug.jpeg'
import nahidfrontmug from '../assets/nahid_frontmug.jpeg'
import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel'
import Gallery from '../components/Gallery'


export const About = () => {
    return (
        <div className="min-h-screen bg-black text-white  py-48">
            <div className="relative group h-78 w-69 rounded-[1.2px] bg-gradient-to-br from-white/80 via-white/60 to-white/40 mx-auto p-3">
                <img
                    src={nahidsidemug}
                    alt="default"
                    className="absolute inset-0 w-full h-64 object-cover px-3 pt-3 group-hover:hidden"
                />
                <img
                    src={nahidfrontmug}
                    alt="hover"
                    className="absolute inset-0 w-full h-64 object-cover px-3 pt-3 hidden group-hover:block"
                />
            </div>

            <div className="px-4 sm:px-6">
                <div className="max-w-3xl md:max-w-4xl lg:max-w-3xl mx-auto">
                    <div className="mt-30 text-2xl mb-4">
                        Where I'm from
                    </div>
                    <p className="text-white/70 text-sm">
                        I grew up in Kolkata, surrounded by history, crowded streets, and constant conversations that shape how people think. From a young age I never had a clear plan growing up, only the intention to do good in whatever path I found myself on. So, tech became the tool, not the purpose. And I'm still trying to do a little better every day.
                    </p>
                </div>
            </div>

            <InfiniteCarousel />

            <div className='px-4 sm:px-6'>
                <div className="max-w-3xl md:max-w-4xl lg:max-w-3xl mx-auto mb-50">
                    <div className="mt-30 text-2xl mb-4">
                        What I like to do
                    </div>
                    <p className='text-white/70 text-sm mb-14'>
                        Jack of all trades, master of none. I have a long list of unfinished side projects and stuff I enjoy in my free time.
                    </p>
                    <h1 className='mb-4 text-md'>
                        F1 Analytics app
                    </h1>
                    <p className='text-white/70 text-sm mb-14'>
                        I’m currently working on an F1 analytics app using FastF1, analyzing variables like tyre behavior, weather conditions, and lap data to understand performance beyond the surface numbers. Trying to blend CS with automobile tech is a fun little endeavor that I indulge in my free time.
                    </p>
                    <h1 className='mb-4 text-md'>
                        Hobbies
                    </h1>
                    <p className='text-white/70 text-sm'>
                        I'm a big enthusiast of anything mechanical. Cars, Bikes, Boats, anything with an engine. I watch F1, WEC, WRC. I play mainstream pc games like Call of Duty, Assassin's Creed, Far Cry, and underrated gems like Ghost Recon, Kingdom Come and A Plague Tale. I play football, basketball and have recently taken up badminton as my next sport. I'm a Warhammer 40K geek, and I hope anyone reading this line gets the Big E reference. <br /> A lot of things have been said and done, but in the end I am what I do, not what I say I will do. Therefore,
                    </p>
                    <p className=' inline-block text-sm hover:text-red-700 transition-colors duration-500'>
                        I try all things. I achieve what I can.
                    </p>
                </div>

                <div className='flex  flex-col justify-center items-center'>
                    <h1 className='text-5xl mb-20'>
                        Some moments from my life..
                    </h1>

                    <Gallery />
                </div>
            </div>
        </div>
    )
}

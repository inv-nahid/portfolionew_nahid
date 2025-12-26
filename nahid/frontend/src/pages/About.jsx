import nahidsidemug from '../assets/nahid_sidemug.jpeg'
import nahidfrontmug from '../assets/nahid_frontmug.jpeg'
import InfiniteCarousel from '../components/InfiniteCarousel/InfiniteCarousel'

export const About = () => {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-48">
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

            <div className="mt-30 text-2xl mb-4">
                Where I'm from...
            </div>
            <p className='text-white/70'>
                I grew up in Kolkata, surrounded by history, crowded streets, and constant conversations that shape how people think. From a young age I never had a clear plan growing up, only the intention to do good in whatever path I found myself on. So, tech became the tool, not the purpose. And I'm still trying to do a little better every day.
            </p>

            <InfiniteCarousel />
        </div>
    )
}

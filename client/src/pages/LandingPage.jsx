import LeftSidebar from '../components/LeftSidebar'
import Speakers from '../components/Speakers'
import Schedule from '../components/Schedule'
import HeroSection from '../components/HeroSection'

export default function LandingPage() {
  return (
    <div>
      <HeroSection/>
      <div className="container mx-auto flex mt-8 space-x-8">
        <LeftSidebar />
        <div className="w-3/4">
          <Speakers />
          <Schedule />
        </div>
      </div>
    </div>
  )
}

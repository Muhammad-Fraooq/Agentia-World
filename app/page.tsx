import Hero from "@/components/Hero";
import Agents from "./agents/page";
import Contact from "./contact/page";
import Pricing from "./pricing/page";
import Technalogy from "./technalogy/page";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Technalogy/>
      <Agents/>
      <Pricing/>
      <Contact/>
    </div>
    );
}

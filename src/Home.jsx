/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import {
  Menu, X, Star, TrendingUp, ArrowRight, Eye,
  Wallet, Zap, Award, Smile, Layers,
  Globe, Code2, LayoutTemplate, Briefcase, PenTool,
  Image as ImageIcon, Megaphone, Palette, Sparkles, Wrench, Search, RefreshCw,
  Sun, Moon,
  Smartphone, Headphones, ShieldCheck, Repeat, CheckCircle,
  MessageSquare, ClipboardList, Rocket, LifeBuoy,
  Check, ChevronDown, Mail, Phone, MapPin,
} from "lucide-react";
import { href } from "react-router-dom";


// Simple inline social icons (lucide removed brand icons in newer versions)
const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
  </svg>
);
const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M18.9 2H22l-7.2 8.2L23 22h-6.9l-5.4-7-6.2 7H2l7.7-8.8L1 2h7l4.9 6.4L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z"/>
  </svg>
);
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
  </svg>
);
const SOCIAL_ICONS = [FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon];

const NAV_LINKS = ["About", "Services", "Portfolio", "Process", "Pricing", "FAQ"];

const EDGE_FEATURES = [
  { icon: Wallet, title: "Affordable Pricing", desc: "Quality digital services that fit small business budgets." },
  { icon: Zap,    title: "Fast Delivery",      desc: "Get your project delivered on time, every time." },
  { icon: Award,  title: "High Quality Work",  desc: "Pixel-perfect designs built with attention to detail." },
  { icon: Smile,  title: "Customer Satisfaction", desc: "Dedicated support until you're 100% happy." },
];

const SERVICES = [
  { icon: Globe,         title: "Website Design",     desc: "Beautiful, modern websites tailored to your brand." },
  { icon: Code2,         title: "Website Development", desc: "Fast, responsive, and SEO-friendly builds." },
  { icon: LayoutTemplate, title: "Landing Pages",       desc: "High-converting pages for campaigns and launches." },
  { icon: Briefcase,     title: "Business Portfolio",  desc: "Professional portfolios that showcase your work." },
  { icon: PenTool,       title: "Logo Design",         desc: "Memorable logos that define your brand identity." },
  { icon: ImageIcon,     title: "Banner Design",       desc: "Eye-catching banners for ads and social media." },
  { icon: Megaphone,     title: "Social Media Graphics", desc: "Engaging visuals that grow your online presence." },
  { icon: Palette,       title: "Brand Identity",      desc: "Cohesive visual systems across every touchpoint." },
  { icon: Sparkles,      title: "UI/UX Design",        desc: "Intuitive interfaces that delight your users." },
  { icon: Wrench,        title: "Website Maintenance", desc: "Ongoing updates, fixes, and performance tuning." },
  { icon: Search,        title: "SEO Optimization",    desc: "Rank higher and reach more of your audience." },
  { icon: RefreshCw,     title: "Website Redesign",    desc: "Modern makeovers for outdated websites." },
];

const PORTFOLIO = [
  { tag: "Web Design",
    title: "Restaurant Website",
    desc: "Modern rustic site with online ordering.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
    link: "https://gpriyam6002-dev.github.io/resturant-web/",
    live: true },
  { tag: "Branding",
    title: "Clothing Brand",
    desc: "Minimal fashion brand for a product line.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    link: "https://gpriyam6002-dev.github.io/Monolith/",
    live: true },
  { tag: "Real Estate",
    title: "Beautiful Listing",
    desc: "Luxury real estate listing with virtual tour.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    link: "" },
  { tag: "Web Design",
    title: "Gym Website",
    desc: "High-energy design for class bookings.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
    link: "https://gpriyam6002-dev.github.io/gym-web/",
    live: true },
  { tag: "Education",
    title: "School Website",
    desc: "Clean portal for admissions and info.",
    img: "https://images.unsplash.com/photo-1606996704949-682f483be456?q=80&w=800&auto=format&fit=crop",
    link: "" },
  { tag: "Branding",
    title: "Coffee Shop Brand",
    desc: "Cozy identity for a local café chain.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    link: "" },
  { tag: "Real Estate",
    title: "Real Estate Landing",
    desc: "Conversion-focused landing page.",
    img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=800&auto=format&fit=crop",
    link: "" },
  { tag: "Logo Collection",
    title: "Logo Collection",
    desc: "Diverse logo set for various clients.",
    img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
    link: "" },
  { tag: "Social Media",
    title: "Social Media Designs",
    desc: "Eye-catching post templates and stories.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    link: "" },
];

const WHY_US = [
  { icon: Sparkles,    title: "Modern Design",  desc: "Sleek, on-trend visuals that feel current." },
  { icon: Smartphone,  title: "Mobile Responsive", desc: "Looks perfect on every screen size." },
  { icon: Zap,         title: "Fast Delivery",   desc: "Projects completed on time, every time." },
  { icon: Search,      title: "SEO Friendly",    desc: "Built to rank and capture organic traffic." },
  { icon: Wallet,      title: "Affordable Pricing", desc: "Transparent rates with no hidden fees." },
  { icon: Headphones,  title: "Ongoing Support", desc: "We're here even after the project ends." },
  { icon: ShieldCheck, title: "Secure Websites", desc: "SSL, backups, and security best practices." },
  { icon: Repeat,      title: "Professional Rebranding", desc: "Refresh your identity without losing equity." },
];

const PROCESS = [
  { icon: MessageSquare,  title: "Consultation", desc: "We learn about your goals and audience." },
  { icon: ClipboardList,  title: "Planning",     desc: "Mapping the project scope and timeline." },
  { icon: PenTool,        title: "Design",       desc: "Crafting visuals that match your brand." },
  { icon: Code2,          title: "Development",  desc: "Building a fast, responsive product." },
  { icon: Eye,            title: "Review",       desc: "You review and request refinements." },
  { icon: Rocket,         title: "Launch",       desc: "We deploy your project to the world." },
  { icon: LifeBuoy,       title: "Support",      desc: "Ongoing help whenever you need it." },
];

const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Restaurant Owner",
    quote: "IVAS completely transformed our online presence. Bookings doubled within the first month of launch.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Rohan Sharma",
    role: "Fitness Coach",
    quote: "Professional, fast, and incredibly responsive to feedback. Couldn't be happier with the final result.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    name: "Emily Nguyen",
    role: "Boutique Founder",
    quote: "From branding to the website, everything feels cohesive and premium. Highly recommend their team.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "₹1999",
    desc: "Perfect for new businesses needing a simple online presence.",
    features: ["1-page Website", "Mobile Responsive", "Basic SEO Setup", "1 Round of Revisions", "5-Day Delivery"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹3999",
    desc: "Our most popular plan for growing businesses.",
    features: ["Up to 5 Pages", "Custom Design", "Advanced SEO", "Logo Design Included", "3 Rounds of Revisions", "10-Day Delivery", "1 Month Support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹7999",
    desc: "Full digital package for serious business growth.",
    features: ["Up to 10 Pages", "Brand Identity Kit", "Social Media Graphics", "Priority Support", "Unlimited Revisions", "3 Months Support"],
    popular: false,
  },
];

const FAQS = [
  { q: "How long does it take to build a website?", a: "Most projects take between 5-14 days depending on the package and scope, with clear milestones along the way." },
  { q: "Do you offer revisions?", a: "Yes — every plan includes revision rounds so you can fine-tune the design until it's exactly right." },
  { q: "What is your pricing structure?", a: "We offer fixed-price packages starting at ₹1999, with custom quotes available for larger or more complex projects." },
  { q: "Will my website be mobile friendly?", a: "Absolutely. Every website we build is fully responsive and tested across phones, tablets, and desktops." },
  { q: "Do you provide ongoing support?", a: "Yes, our Growth and Premium plans include dedicated support windows, and maintenance packages are available afterward." },
  { q: "Can you redesign my existing website?", a: "Yes — we specialize in modern redesigns that preserve your SEO rankings while refreshing your look and feel." },
];

export default function IvasLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={dark ? "bg-[#0b0a17] text-white min-h-screen font-sans" : "bg-slate-50 text-slate-900 min-h-screen font-sans"}>
      {/* ── Nav ─────────────────────────────────────── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? dark ? "bg-[#0b0a17]/90 backdrop-blur-lg shadow-lg shadow-black/20" : "bg-white/90 backdrop-blur-lg shadow-lg shadow-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center font-bold text-sm">
              I
            </div>
            <span className="font-bold text-lg tracking-tight">IVAS</span>
          </div>

          {/* Desktop links */}
          <div className={`hidden md:flex items-center gap-8 text-sm ${dark ? "text-slate-300" : "text-slate-600"}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className={`cursor-pointer ${dark ? "hover:text-white transition-colors" : "hover:text-slate-900 transition-colors"}`}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Theme toggle + CTA + burger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark(!dark)}
              className={`relative w-12 h-6.5 rounded-full border transition-colors duration-300 flex items-center px-1 ${dark ? "bg-violet-600 border-violet-600" : "bg-slate-200 border-slate-200"}`}
              aria-label="Toggle theme"
            >
              <span
                className={`w-4.5 h-4.5 rounded-full bg-white shadow flex items-center justify-center transition-transform duration-300 ${dark ? "translate-x-5" : "translate-x-0"}`}
              >
                {dark ? <Moon size={10} className="text-violet-600" /> : <Sun size={10} className="text-amber-500" />}
              </span>
            </button>
            <button 
              onClick={() => scrollTo("contact")}
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all px-4 py-2 rounded-lg text-sm font-semibold shadow-lg shadow-violet-900/30 text-white">
              Get Started
            </button>
            <button
              className={`md:hidden p-2 rounded-lg border ${dark ? "border-white/10 text-slate-300" : "border-slate-200 text-slate-500"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-80 border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className={`px-6 py-4 flex flex-col gap-4 ${dark ? "bg-[#0b0a17]/95" : "bg-white/95"}`}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                onClick={() => scrollTo(link.toLowerCase())}
                className={`cursor-pointer text-sm transition-colors ${dark ? "text-slate-300 hover:text-white" : "text-slate-600 hover:text-slate-900"}`}
              >
                {link}
              </a>
            ))}
            <button className="mt-2 bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-2.5 rounded-lg text-sm font-semibold w-fit text-white">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 px-6 lg:px-10 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-700/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className={`inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium ${dark ? "bg- [#0e0c1c]" : "bg-white"}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              A Premier Digital Agency
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              We Build Digital{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Experiences
              </span>{" "}
              That Help Small Businesses Grow.
            </h1>

            <p className="text-slate-400 text-base sm:text-lg max-w-lg mb-8 leading-relaxed">
              Professional websites, logos, banners, branding, and digital
              solutions designed to attract customers and build trust.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all px-6 py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-violet-900/40">
                Get Started <ArrowRight size={16} />
              </button>
              <button
                onClick={() => scrollTo("portfolio")}
                className={`inline-flex items-center gap-2 border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all px-6 py-3.5 rounded-xl text-sm font-semibold ${dark ? "bg-text-slate-200" : "bg-white"}`}>
                <Eye size={16} /> View Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              <div>
                <div className="text-3xl font-extrabold">150+</div>
                <div className="text-xs text-slate-500 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">50+</div>
                <div className="text-xs text-slate-500 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">3+</div>
                <div className="text-xs text-slate-500 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
                alt="Digital growth abstract"
                className="w-full h-72 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a17]/60 via-transparent to-violet-900/20" />
            </div>

            {/* Floating rating card */}
            <div className={`absolute -top-5 -right-2 sm:right-4 bg-[#161425]/90 backdrop-blur border border-white/10 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3 ${dark ? "bg- [#0e0c1c]" : "bg-white"}`}>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <div className="text-xs font-semibold">5.0 Client Rating</div>
            </div>

            {/* Floating growth card */}
            <div className={`absolute -bottom-6 -left-2 sm:left-6 bg-[#161425]/90 backdrop-blur border border-white/10 rounded-xl px-4 py-3 shadow-xl flex items-center gap-3 ${dark ? "bg- [#0e0c1c]" : "bg-white"}`}>
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center">
                <TrendingUp size={16} />
              </div>
              <div>
                <div className="text-sm font-bold leading-none">Business Growth</div>
                <div className="text-[11px] text-slate-400 mt-0.5">+200% Avg. Growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Empowering Small Businesses ──────────────── */}
      <section id="about" className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
                alt="Team working on digital projects"
                className="w-full h-80 sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a17]/70 via-transparent to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className={`absolute -bottom-6 right-4 sm:right-8 bg-[#161425]/90 backdrop-blur border border-white/10 rounded-xl px-5 py-4 shadow-xl ${dark ? "bg- [#0e0c1c]" : "bg-white"}`}>
              <div className="text-2xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-400 bg-clip-text text-transparent">
                150+
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">Projects Delivered</div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
              Empowering Small Businesses{" "}
              <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                with a Digital Edge
              </span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              IVAS is a creative digital agency dedicated to helping startups,
              small businesses, freelancers, and other online businesses
              succeed with affordable, high-quality, and professional digital
              solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {EDGE_FEATURES.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-violet-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1">{title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────── */}
      <section id="services" className={`px-6 lg:px-10 py-20 ${dark ? "bg-[#0e0c1c]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-medium text-violet-500 mb-4">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              Everything You Need to Grow Online
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              From design to development, we provide end-to-end digital
              solutions tailored for small businesses.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className={`group rounded-2xl p-6 border transition-all duration-300 ${dark ? "bg-[#161425] border-white/8 hover:border-violet-500/40 hover:bg-[#1a1730]" : "bg-slate-50 border-slate-100 hover:border-violet-200 hover:shadow-md"}`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 flex items-center justify-center mb-4 group-hover:from-violet-500 group-hover:to-indigo-500 transition-all duration-300">
                  <Icon size={20} className="text-violet-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────────────── */}
      <section id="portfolio" className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-4 border ${dark ? "bg-white/5 border-white/10 text-violet-300" : "bg-violet-50 border-violet-100 text-violet-600"}`}>
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Portfolio Highlights</h2>
            <p className={`text-sm sm:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
              A glimpse of the digital experiences we've crafted for
              businesses just like yours.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO.map(({ tag, title, desc, img, link, live }) => (
              <a
                key={title}
                href={link || "#"}
                target={link ? "_blank" : undefined}
                rel={link ? "noopener noreferrer" : undefined}
                className={`group block rounded-2xl overflow-hidden border transition-all duration-300 ${
                  dark
                    ? "bg-[#161425] border-white/8 hover:border-violet-500/40"
                    : "bg-white border-slate-100 hover:border-violet-200 hover:shadow-lg"
                } ${link ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className="relative h-44 overflow-hidden">
                  {live ? (
                    <iframe
                      src={link}
                      title={title}
                      className="absolute top-0 left-0 border-0 pointer-events-none"
                      style={{
                        transform: "scale(0.37)",
                        transformOrigin: "top left",
                        width: "1600px",
                        height: "900px",
                      }}
                    />
                  ) : (
                    <img
                      src={img}
                      alt={title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  <span className="absolute top-3 right-3 bg-violet-600/90 text-white text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                    {tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-1.5">{title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? "text-slate-500" : "text-slate-500"}`}>{desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────── */}
      <section className={`px-6 lg:px-10 py-20 ${dark ? "bg-[#0e0c1c]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-4 border ${dark ? "bg-white/5 border-white/10 text-violet-300" : "bg-violet-50 border-violet-100 text-violet-600"}`}>
              Why Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Why Choose Us?</h2>
            <p className={`text-sm sm:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
              We combine creativity, technology, and strategy to deliver
              results that actually move your business forward.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {WHY_US.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className={`rounded-2xl p-6 border transition-all duration-300 ${dark ? "bg-[#161425] border-white/8 hover:border-violet-500/40" : "bg-slate-50 border-slate-100 hover:border-violet-200 hover:shadow-md"}`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-violet-400" />
                </div>
                <h3 className="font-semibold mb-1.5">{title}</h3>
                <p className={`text-sm leading-relaxed ${dark ? "text-slate-500" : "text-slate-500"}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────── */}
      <section id="process" className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-4 border ${dark ? "bg-white/5 border-white/10 text-violet-300" : "bg-violet-50 border-violet-100 text-violet-600"}`}>
              Our Process
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Our Process</h2>
            <p className={`text-sm sm:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
              A clear, proven workflow that ensures smooth delivery and
              outstanding results every time.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6">
            {PROCESS.map(({ icon: Icon, title, desc }, i) => (
              <div key={title} className="text-center relative">
                <div className="relative mx-auto mb-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-900/30">
                  <Icon size={20} className="text-white" />
                  <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-[11px] font-bold flex items-center justify-center ${dark ? "bg-[#0b0a17] border border-white/10 text-violet-300" : "bg-white border border-slate-200 text-violet-600"}`}>
                    {i + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className={`text-xs leading-relaxed ${dark ? "text-slate-500" : "text-slate-500"}`}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────── */}
      <section className={`px-6 lg:px-10 py-20 ${dark ? "bg-[#0e0c1c]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-4 border ${dark ? "bg-white/5 border-white/10 text-violet-300" : "bg-violet-50 border-violet-100 text-violet-600"}`}>
              Testimonials
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">What Clients Say</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map(({ name, role, quote, avatar }) => (
              <div
                key={name}
                className={`rounded-2xl p-6 border ${dark ? "bg-[#161425] border-white/8" : "bg-slate-50 border-slate-100"}`}
              >
                <div className="flex text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${dark ? "text-slate-300" : "text-slate-600"}`}>
                  "{quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold">{name}</div>
                    <div className={`text-xs ${dark ? "text-slate-500" : "text-slate-400"}`}>{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 ">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 px-8 sm:px-16 py-14 text-center">
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10 ">
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 text-white">
                Ready to Grow Your Business Online?
              </h2>
              <p className="text-violet-100 max-w-xl mx-auto mb-8">
                Let IVAS build the digital identity that takes your business
                to the next level.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 bg-white text-violet-700 hover:bg-violet-50 transition-all px-6 py-3.5 rounded-xl text-sm font-semibold">
                  Start Your Project <ArrowRight size={16} />
                </button>
                <button 
                  onClick={() => scrollTo("pricing")}
                  className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 transition-all px-6 py-3.5 rounded-xl text-sm font-semibold text-white">
                  View Pricing Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────── */}
      <section id="pricing" className={`px-6 lg:px-10 py-20 ${dark ? "bg-[#0e0c1c]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-4 border ${dark ? "bg-white/5 border-white/10 text-violet-300" : "bg-violet-50 border-violet-100 text-violet-600"}`}>
              Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Transparent Plans</h2>
            <p className={`text-sm sm:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
              No hidden fees, no surprises. Choose the plan that fits your
              business best.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {PLANS.map(({ name, price, desc, features, popular }) => (
              <div
                key={name}
                className={`relative rounded-2xl p-7 border flex flex-col h-full ${
                  popular
                    ? "bg-gradient-to-b from-violet-600 to-indigo-700 border-transparent shadow-2xl shadow-violet-900/40 sm:-translate-y-3"
                    : dark ? "bg-[#161425] border-white/8" : "bg-slate-50 border-slate-100"
                }`}
              >
                {popular && (
                  <span className={`absolute top-0 right-7 -translate-y-1/2 ${dark ? "bg-white" : "bg-[#0e0c1c]"} ${dark ? "text-[#0e0c1c]" : "text-white"} text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                    Most Popular
                  </span>
                )}
                <h3 className={`font-bold text-lg mb-1 ${popular ? "text-white" : ""}`}>{name}</h3>
                <p className={`text-sm mb-5 ${popular ? "text-violet-100" : dark ? "text-slate-500" : "text-slate-500"}`}>{desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold">{price}</span>
                  <span className={`text-sm ml-1 ${popular ? "text-violet-200" : dark ? "text-slate-500" : "text-slate-400"}`}>/ project</span>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className={`mt-0.5 flex-shrink-0 ${popular ? "text-white" : "text-violet-400"}`} />
                      <span className={popular ? "text-violet-50" : dark ? "text-slate-300" : "text-slate-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("contact")}
                  className={`w-full py-3 rounded-xl text-sm font-semibold transition-all ${
                    popular
                      ? "bg-white text-violet-700 hover:bg-violet-50"
                      : "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────── */}
      <section id="faq" className="px-6 lg:px-10 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-4 border ${dark ? "bg-white/5 border-white/10 text-violet-300" : "bg-violet-50 border-violet-100 text-violet-600"}`}>
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {FAQS.map(({ q, a }, i) => (
              <div
                key={q}
                className={`rounded-xl border overflow-hidden ${dark ? "bg-[#161425] border-white/8" : "bg-slate-50 border-slate-100"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-medium text-sm sm:text-base">{q}</span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-violet-400 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                  <p className={`px-5 pb-4 text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / Footer ─────────────────────────────── */}
      <section id="contact" className={`px-6 lg:px-10 py-20 ${dark ? "bg-[#0e0c1c]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium mb-4 border ${dark ? "bg-white/5 border-white/10 text-violet-300" : "bg-violet-50 border-violet-100 text-violet-600"}`}>
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">Let's Build Something Great</h2>
            <p className={`text-sm sm:text-base leading-relaxed ${dark ? "text-slate-400" : "text-slate-500"}`}>
              Ready to grow your business online? Drop us a message and we'll
              get back to you within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Contact info */}
            <div className="space-y-5">
              <div className={`flex items-center gap-4 rounded-xl p-5 border ${dark ? "bg-[#161425] border-white/8" : "bg-slate-50 border-slate-100"}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Email Us</div>
                  <div className="font-semibold text-sm">hello@ivas.studio</div>
                </div>
              </div>
              <div className={`flex items-center gap-4 rounded-xl p-5 border ${dark ? "bg-[#161425] border-white/8" : "bg-slate-50 border-slate-100"}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Call Us</div>
                  <div className="font-semibold text-sm">+91 69696 96969</div>
                </div>
              </div>
              <div className={`flex items-center gap-4 rounded-xl p-5 border ${dark ? "bg-[#161425] border-white/8" : "bg-slate-50 border-slate-100"}`}>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Location</div>
                  <div className="font-semibold text-sm">Remote — Working Globally</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`rounded-2xl p-6 sm:p-8 border ${dark ? "bg-[#161425] border-white/8" : "bg-slate-50 border-slate-100"}`}>
              {sent ? (
                <div className="text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check size={22} className="text-violet-400" />
                  </div>
                  <h3 className="font-bold text-lg mb-1">Message Sent!</h3>
                  <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-slate-500">Full Name</label>
                      <input
                        name="name" value={form.name} onChange={handleChange} required
                        className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border focus:border-violet-500 transition-colors ${dark ? "bg-[#0e0c1c] border-white/10 text-white placeholder:text-slate-600" : "bg-white border-slate-200 text-slate-900"}`}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5 text-slate-500">Email</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handleChange} required
                        className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border focus:border-violet-500 transition-colors ${dark ? "bg-[#0e0c1c] border-white/10 text-white placeholder:text-slate-600" : "bg-white border-slate-200 text-slate-900"}`}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-slate-500">Phone Number</label>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border focus:border-violet-500 transition-colors ${dark ? "bg-[#0e0c1c] border-white/10 text-white placeholder:text-slate-600" : "bg-white border-slate-200 text-slate-900"}`}
                      placeholder="+91 69696 96969"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5 text-slate-500">Message</label>
                    <textarea
                      name="message" rows="4" value={form.message} onChange={handleChange} required
                      className={`w-full px-4 py-2.5 rounded-lg text-sm outline-none border focus:border-violet-500 transition-colors resize-none ${dark ? "bg-[#0e0c1c] border-white/10 text-white placeholder:text-slate-600" : "bg-white border-slate-200 text-slate-900"}`}
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all py-3 rounded-xl text-sm font-semibold text-white"
                  >
                    Send Message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer className={`px-6 lg:px-10 pt-16 pb-8 border-t ${dark ? "bg-[#0b0a17] border-white/5" : "bg-white border-slate-100"}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center font-bold text-sm text-white">
                  I
                </div>
                <span className="font-bold text-lg tracking-tight">IVAS</span>
              </div>
              <p className={`text-sm leading-relaxed mb-5 max-w-xs ${dark ? "text-slate-500" : "text-slate-500"}`}>
                A premier digital agency helping small businesses build a
                lasting online presence.
              </p>
              <div className="flex gap-3">
                {SOCIAL_ICONS.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${dark ? "border-white/10 text-slate-400 hover:text-white hover:border-white/30" : "border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300"}`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4">Quick Links</h4>
              <ul className={`space-y-2.5 text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>
                {NAV_LINKS.map((link) => (
                  <li key={link}>
                    <a onClick={() => scrollTo(link.toLowerCase())} className={`cursor-pointer ${dark ? "hover:text-white transition-colors" : "hover:text-slate-900 transition-colors"}`}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4">Services</h4>
              <ul className={`space-y-2.5 text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>
                {["Website Design", "Branding", "SEO", "Social Media"].map((s) => (
                  <li key={s}>
                    <a onClick={() => scrollTo("services")} className={`cursor-pointer ${dark ? "hover:text-white transition-colors" : "hover:text-slate-900 transition-colors"}`}>{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm mb-4">Contact</h4>
              <ul className={`space-y-2.5 text-sm ${dark ? "text-slate-500" : "text-slate-500"}`}>
                <li>hello@ivas.studio</li>
                <li>+91 69696 96969</li>
                <li>Remote — Working Globally</li>
              </ul>
            </div>
          </div>

          <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${dark ? "border-white/5 text-slate-500" : "border-slate-100 text-slate-400"}`}>
            <span>© 2024 IVAS Studio. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className={dark ? "hover:text-white transition-colors" : "hover:text-slate-900 transition-colors"}>Privacy Policy</a>
              <a href="#" className={dark ? "hover:text-white transition-colors" : "hover:text-slate-900 transition-colors"}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
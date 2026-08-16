import Link from "next/link";
export function Nav(){return <header className="site-nav"><Link href="/" className="brand">sakthivel<span>.dev</span></Link><nav><a href="/#projects">projects</a><a href="/#experience">experience</a><Link href="/cv">cv</Link><Link href="/links">links</Link></nav></header>}

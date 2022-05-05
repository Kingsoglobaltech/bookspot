import Link from 'next/link'
import Head from 'next/head'
import { NextSeo } from 'next-seo'

import Nav from './Nav'
import siteConfig from '../config/siteConfig'

export default function Layout({ children, title='' }) {
  return (
    <>
      <NextSeo
        title={title? title + '': 'Home'}
        />
      <Head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>" />
        <meta charSet="utf-8" />
        <meta name='description' content='Bookstore'/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='flex min-hin-screen flex-col justify-between'>
      <Nav />
      <main>
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-10 border-t mt-16 shadow-inner">
        <p>Copyright C 2022 Bookstore</p>
        
      </footer>
     </div>
    </>
    
  )
}

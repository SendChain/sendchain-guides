import React from 'react'
import Link from 'next/link'

import Icon from '../Icon/Icon'
import Container from '../Container/Container'
import SubscribeForm from '../Contact/SubscribeForm'
import { ReactComponent as Logo } from './HSlogo.svg'

function Footer() {
  return (
    <header className="Footer">
      <Container>
        <div className="Footer-top">
          <div className="Footer-nav">
            <a className="Footer-nav-item" href="/">Home</a>
            <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="https://sendchain.biz">About</a>
            <a className="Footer-nav-item" target="_blank" rel="noopener noreferrer" href="https://t.me/SendChainWallet">Contact</a>
            <Link href="/disclaimer" as="/disclaimer">
              <a className="Footer-nav-item">Disclaimer</a>
            </Link>
          </div>
          <div className="Footer-subscribe">
            <SubscribeForm formCode="m3g0e6" formId="1561498" />
            <div className="Footer-subscribe-info">
              Subscribe to our newsletter to get new products, guides and cheat sheets when they are published.
            </div>
          </div>
        </div>

        <hr className="Divider" />

        <div className="Footer-bottom">
         

          <span>@ 2023 SendChain</span>
        </div>
      </Container>
    </header>
  )
}

export default Footer

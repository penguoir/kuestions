import Head from 'next/head'
import { FaPlus } from 'react-icons/fa'
import useWindowSize from '../util/useWindowSize'
import { useState } from 'react'

const Layout = (props) => {
  const size = useWindowSize()
  const [navbarIsOpen, setNavbarIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Kuestions</title>
        <link rel="icon" type="image/png" href="https://img.icons8.com/flat_round/2x/hand.png" />
      </Head>

      <nav class="navbar is-primary is-mobile" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://img.icons8.com/flat_round/2x/hand.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="28" height="28" />
            <p style={{ paddingLeft: '1rem' }}>
              <strong>Kuestions</strong>
            </p>
          </a>
          <a onClick={e => setNavbarIsOpen(!navbarIsOpen)} role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-end">
          {(
            (size.width < 1125) ? (navbarIsOpen) : (true)
          )
           && (
            <div class="navbar-item">
              <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.8.2/bulma-0.8.2.zip">
                <span class="icon">
                  <FaPlus />
                </span>
                <span>New Room</span>
              </a>
            </div>
          )}
        </div>
      </nav>

      {props.children}

      <div className="footer">
        <div className="container">
          <div className="content">
            <p>
              Copyright (c) 2020 <a href="https://orimarash.com">Ori Marash</a>
            </p>
            <p>
              This project is on <a href="https://github.com/penguoir/kuestions">GitHub</a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
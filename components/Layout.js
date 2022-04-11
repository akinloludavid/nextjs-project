import React, { Children } from 'react'
import { AppBar, Toolbar, Typography, Container, Link } from '@mui/material'
import Head from 'next/head'
import NextLink from 'next/link'
import useStyles from '../utils/styles'
export default function Layout({ title = "Amazona", description, children }) {

  const classes = useStyles()
  return (
    <div>
      <Head>
        <title>{title}</title>
        {description && <meta name='description' content={description}></meta>}
      </Head>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <NextLink href={'/'} passHref>
            <Link>
              <Typography className={classes.brand}>Amazona</Typography>
            </Link>
          </NextLink>
          <div className={classes.grow} />
          <div>
            <NextLink href={'/cart'} passHref>
              <Link>Cart</Link>
            </NextLink>
            <NextLink href={'/login'} passHref>
              <Link>Login</Link>
            </NextLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>
        {children}
      </Container>


      <footer className={classes.footer}>
        <Typography>
          All rights reserved, arizona 2022

        </Typography>
      </footer>
    </div>
  )
}

import React from 'react'
import { useRouter } from 'next/router'
import data from '../../utils/data';
import { Link, Grid, List, ListItem, Typography, Card, Button } from '@mui/material';
import NextLink from 'next/link'
import Layout from '../../components/Layout';
import useStyles from '../../utils/styles';
import Image from 'next/image';
const ProductScreen = () => {
  const classes = useStyles()
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((product) => product.slug === slug)


  if (!product) {
    return <div>Product Not Found</div>
  }

  return (
    <div>
      <Layout title={product.name}>
        <div className={classes.section}>
          <NextLink href={'/'} passHref>
            <Link>Back to products</Link>
          </NextLink>
        </div>

        <Grid spacing={1} container>
          <Grid item xs={12} md={6}>
            <Image layout='responsive' src={product.image} width={640} height={640} alt={product.title}></Image>
          </Grid>
          <Grid item xs={12} md={3}>
            <List>
              <ListItem>
                <Typography>
                  {product.name}
                </Typography>

              </ListItem>
              <ListItem>
                <Typography>
                  Category: {product.category}

                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Branding: {product.brand}

                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Rating: {product.rating} stars ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                Description:
                <Typography>{product.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>

                    <Grid item xs={6}>
                      <Typography>Price</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>${product.price}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Status</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>${product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button type='button' fullWidth variant='contained' color='primary'>Add To Cart</Button>
                </ListItem>
              </List>
            </Card>

          </Grid>
        </Grid>
      </Layout>
    </div>
  )
}

export default ProductScreen
import { Box, Button, Typography } from '@mui/material'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?magic)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h3" gutterBottom>
        Welcome to the Magical Marketplace
      </Typography>
      <Typography variant="h6" gutterBottom>
        Discover, trade, and collect magical items from the wizarding world.
      </Typography>
      <Button variant="contained" color="secondary" size="large">
        Explore Now
      </Button>
    </Box>
  )
}

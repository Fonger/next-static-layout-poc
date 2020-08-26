import Link from 'next/link'

import GreenLayout from '../layouts/GreenLayout'

const GreenPage = () => {
  return (
    <p>
      This is the <strong style={{ color: 'green' }}>Green</strong> page, it's
      borders are green
      <br />
      <br />
      Go back to the{' '}
      <Link href="/">
        <a style={{ color: 'blue' }}>Blue Page</a>
      </Link>
      <br />
      <br />
      Go to the{' '}
      <Link href="/green2">
        <a style={{ color: 'green' }}>Green2 Page</a>
      </Link>
    </p>
  )
}

GreenPage.Layout = GreenLayout

export default GreenPage

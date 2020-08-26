import Link from 'next/link'

import GreenLayout from '../layouts/GreenLayout'

const GreenPage = () => {
  return (
    <p>
      This is the <strong style={{ color: 'green' }}>Green2</strong> page, it's
      borders are green.
      <br />
      <br />
      Go back to the{' '}
      <Link href="/">
        <a style={{ color: 'blue' }}>Blue Page</a>
      </Link>
      <br />
      <br />
      Go to the{' '}
      <Link href="/green">
        <a style={{ color: 'green' }}>Green Page</a>
      </Link>
    </p>
  )
}

GreenPage.Layout = GreenLayout

export default GreenPage

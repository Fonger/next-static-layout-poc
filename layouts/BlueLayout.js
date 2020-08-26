import { useEffect } from 'react';
export default function BlueLayout({ children }) {
  useEffect(() => {
    console.log('blue layout mount!');
    return () => {
      console.log('blue layout unmount!');
    }
  }, [])
  return <main style={{ border: '4px dashed blue' }}>{children}</main>
}

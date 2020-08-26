import { useEffect } from 'react';
export default function GreenLayout({ children }) {
  useEffect(() => {
    console.log('green layout mount!');
    return () => {
      console.log('green layout unmount!');
    }
  }, [])
  return <main style={{ border: '4px dashed green' }}>
    {children}
  </main>
}

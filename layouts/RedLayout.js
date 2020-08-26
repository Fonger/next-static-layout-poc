import { useEffect } from 'react';
export default function RedLayout({ children }) {
  useEffect(() => {
    console.log('red layout mount!');
    return () => {
      console.log('red layout unmount!');
    }
  }, [])
  return <main style={{ border: '4px dashed red' }}>{children}</main>
}

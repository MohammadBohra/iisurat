import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>🦷 Dentist Dashboard</h1>
      <p>Hey there! Let’s manage some patient data 😎</p>
    </div>
  );
}


import Head from 'next/head'
import Postlist from '../components/Postlist.js'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Postlist />
    </div>
  )
}

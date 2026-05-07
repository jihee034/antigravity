'use client'

import dynamic from 'next/dynamic'

const MotionCountDemo = dynamic(
  () => import('@/components/motion-count/MotionCountDemo').then(m => m.MotionCountDemo),
  { ssr: false },
)

export default function MotionCountPage() {
  return <MotionCountDemo />
}

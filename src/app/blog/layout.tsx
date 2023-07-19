import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog'
}

export default function BlogLayout({ children }: LayoutProps) {
  return [children]
}

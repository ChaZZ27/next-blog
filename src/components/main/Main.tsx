'use client'
import React, { ReactNode } from 'react';

const Main =  ({children}: {children?: ReactNode}) => {
  return (
    <main className="home my-10 flex-auto">
      {children}
    </main>
  )
}

export default Main;
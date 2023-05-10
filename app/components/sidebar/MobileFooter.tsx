'use client'
import React from 'react'
import useRoutes from '@/app/hooks/useRoutes'
import useConversation from '@/app/hooks/useConversation'
import MobileItem from './MobileItem'

type Props = {}

const MobileFooter = (props: Props) => {
    const routes = useRoutes();
    const {isOpen} = useConversation();

    if (isOpen) {
        return null;    }

  return (
    <div className='fixed justify-between w-full bottom-0 z-40 flex items-center bg-whte border-t-[1px] lg:hidden'>
        {routes.map((routes) => (
            <MobileItem key={routes.href} href={routes.href} active={routes.active} icon={routes.icon} onClick ={routes.onClick}/>
        ))}
    </div>
  )
}

export default MobileFooter
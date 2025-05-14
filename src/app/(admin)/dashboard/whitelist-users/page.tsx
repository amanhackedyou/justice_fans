import WhitelistUsers from '@/components/Admin/Whitelist-Users/page'
import React from 'react'

const page = () => {
    const whitelistUsers = ["ay12121230@gmail.com", "imobcodeofficial@gmail.com", "cyrimamin@gmail.com"]
    // const whitelistUsers = []
    return (
        <WhitelistUsers whitelistUsers={whitelistUsers} />
    )
}

export default page
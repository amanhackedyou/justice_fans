import MembershipPage from '@/components/Admin/Membership/MembershipPage'
import React from 'react'

const page = async ({ params }) => {
    const slugs = await params;
    const profileId = slugs["id"];
    const membershipId = slugs["membershipId"];


    return (
        <MembershipPage profileId={profileId} membershipId={membershipId} />
    )
}

export default page
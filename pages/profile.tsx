import ProfileHeading from 'components/pages/profile/Profile.heading';
import ProfileContent from 'components/pages/profile/Profile.content';

const Profile = () => {
    return (
        <>
            <ProfileHeading
                backgroundImageUrl='images/profile/heading_image.png'
                profileImageUrl='images/profile/profile_image.png'
                socials={{
                    tw: 'https://twitter.com',
                    fc: 'https://facebook.com',
                    in: 'https://instagram.com'
                }} />

            <ProfileContent
                userName="some name"
                description='Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Hendrerit tincidunt mattis mauris nullam enim 
                            dictum. Tristique lobortis scelerisque lectus 
                            pellentesque. Sed odio id nulla aenean faucibus 
                            tincidunt massa. Mi cras in gravida nibh mattis 
                            quis euismod vel facilisis.' />

        </>
    )
}

export default Profile

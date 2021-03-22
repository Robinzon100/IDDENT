import { Twitter, Facebook, Instagram } from "react-feather";




interface headingProps {
    backgroundImageUrl: string,
    profileImageUrl: string,
    socials: {
        tw: string,
        fc: string,
        in: string
    }
}

const ProfileHeading = ({ backgroundImageUrl, profileImageUrl, socials }: headingProps) => {
    return (
        <>
            <div className="profile_heading_main"
                style={{ backgroundImage: `url("${backgroundImageUrl}")` }}>
                <div className="container">
                    <div className="content">
                        <div className="profile_image">
                            <div className="image" style={{ backgroundImage: `url("${profileImageUrl}")` }} />
                            <div className="image_colored_shadow" style={{ backgroundImage: `url("${profileImageUrl}")` }} />
                        </div>
                        <div className="socials">
                            <a href={socials.tw} className="social">
                                <Twitter
                                    size={28}
                                    strokeWidth={1}
                                    color='var(--light-black)' />
                            </a>
                            <a href={socials.fc} className="social">
                                <Facebook
                                    size={28}
                                    strokeWidth={1}
                                    color='var(--light-black)' />
                            </a>
                            <a href={socials.in} className="social">
                                <Instagram
                                    size={28}
                                    strokeWidth={1}
                                    color='var(--light-black)' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <style jsx>{`
                .profile_heading_main::after{
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-image: url(${backgroundImageUrl});
                } 
            `}</style>
        </>
    )
}

export default ProfileHeading

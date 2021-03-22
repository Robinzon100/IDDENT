import Button from 'components/lib/button/Button';
import { Inbox } from 'react-feather';

interface contentProps {
    userName: string,
    description: string
}



const ProfileContent = ({ userName, description }: contentProps) => {
    return (
        <>
            <div className="profile_content_main">
                <div className="container">
                    <h1 className="f-size-h3 f-weight-bl">{userName}</h1>
                    <div className="description f-size-p1 f-weight-l">{description}</div>

                    <div className="buttons_container">

                        <Button
                            onClick={() => console.log('pressed')}
                            size={2}
                            textColor='white'
                            color={'black'} >
                            <Inbox
                                style={{ marginRight: '1rem' }}
                                strokeWidth={1.5}
                                color={'var(--dark-grey)'} />
                            <p className="email_button_text f-size-p1 f-weight-r">
                                empty
                            </p>
                        </Button>

                        <Button
                            onClick={() => console.log('pressed')}
                            style={{marginLeft: '2rem'}}
                            size={2}
                            textColor='white'
                            color={'dark-green'} >
                            <Inbox
                                style={{ marginRight: '1rem' }}
                                strokeWidth={1.5}
                                color={'var(--white)'} />
                            <p className="email_button_text f-size-p1 f-weight-r">
                                empty
                            </p>
                        </Button>

                        <Button
                            onClick={() => console.log('pressed')}
                            style={{marginLeft: '2rem'}}
                            size={2}
                            textColor='white'
                            color={'blue'} >
                            <Inbox
                                style={{ marginRight: '1rem' }}
                                strokeWidth={1.5}
                                color={'var(--white)'} />
                            <p className="email_button_text f-size-p1 f-weight-r">
                                empty
                            </p>
                        </Button>


                        <Button
                            onClick={() => console.log('pressed')}
                            style={{marginLeft: '2rem'}}
                            size={2}
                            textColor='white'
                            color={'red'} >
                            <Inbox
                                style={{ marginRight: '1rem' }}
                                strokeWidth={1.5}
                                color={'var(--white)'} />
                            <p className="email_button_text f-size-p1 f-weight-r">
                                empty
                            </p>
                        </Button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProfileContent

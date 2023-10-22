import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter from './Newsletter';

const MailchimpForm = () => {
    const postUrl = `https://gmail.us21.list-manage.com/subscribe?u=e7c3d0012bc7a04b1890660da&id=1b34e2ff90`;
    
    return (
        <>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => {
                    <Newsletter
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                }}
            />
        </>
    )
}

export default MailchimpForm;
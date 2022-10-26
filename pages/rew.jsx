import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';

const clientId = '405938145710-io4upoqbpr8mbo4cuec1l4pvmdlvgpeb.apps.googleusercontent.com'
const secret = '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'

const rew = () => {
    useEffect(() => {
        const initClient = () => {
                gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        console.log('success:', res);
    };
    
    const onFailure = (err) => {
        console.log('failed:', err);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default rew
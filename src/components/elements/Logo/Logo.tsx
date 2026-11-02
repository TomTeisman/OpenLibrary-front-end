import LogoImage from '../../../assets/images/logo.svg';

type LogoProps = {
    className?: string;
}

function Logo({className}: LogoProps) {
    return (
        <img className={className} src={LogoImage} alt="The Bookbase logo" />
    );
}

export default Logo;
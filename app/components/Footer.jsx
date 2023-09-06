

const Footer = () => {
    const d = new Date();
    return (
        <div className="footer">
            &copy;{d.getFullYear()}
        </div>
    );
};

export default Footer;


const Layout = ({children}) => {
    return (
        <div>
            <h2>header</h2>
            {children}
            <h2>footer</h2>
        </div>
    );
};

export default Layout;
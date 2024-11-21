import AuthProvider from "./Auth/AuthContext";

export default function appProvider({children}){
    return <AuthProvider>{children}</AuthProvider>;
}
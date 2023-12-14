import MainLayout from '../components/layout/MainLayout';
import {useEffect} from "react";
import {showError} from "@/components/notificationcontainers";
import {getAxiosErrorMessage} from "@/shared/errorFormatter";
import User from "@/users/UserModel";
import withLoggedIn from "@/guards/withLoggedIn";


export const getServerSideProps = withLoggedIn(async (context) => {


    try {

        const userType="organization"

        const users = await User.findAll({
            where: { userType },
            attributes: { exclude: ['password'] }
        });

        // console.log(users)
        return { props: { data:JSON.parse(JSON.stringify(users)), error: null } };
    } catch (error) {


        return { props: { data: [], error: getAxiosErrorMessage(error) } };

    }


});



export default function Industries({ data, error }) {

    useEffect(() => {
        if(error)
            showError(error)
    }, []);


    return (
        <MainLayout title="Industries">
            <h1>Total Industries {data.length}</h1>
        </MainLayout>
    );
}
import { AdminDashboardContainer } from "./AdminDashboard.styled";
import DashboardLayout from "./components/layout/layout";

const AdminDashboard = () => {

    return(
        <AdminDashboardContainer>
            
            {/* layout component */}
            <DashboardLayout/>
        </AdminDashboardContainer>
    )
}

export default AdminDashboard;
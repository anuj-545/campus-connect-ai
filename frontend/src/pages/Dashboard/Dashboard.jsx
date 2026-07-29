function Dashboard(){
    return(
        <div
            style = {{
                textAlign: "center",
                marginTop: "100px"
            }}
        >
            <h1> 🎉 Welcome to CampusConnect AI Dashboard</h1>

            <p>
                Only logged-in users should see this page.
            </p>
        </div>
    );
}

export default Dashboard;
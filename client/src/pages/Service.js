const { useState } = require("react")



const Service = function () {
    const [activePage, setActivePage] = useState(0);
    const [totalPages, setTotalPages] = useState()

    return (
        <div>
            <h3 className="text-center">Services</h3>
            <div id="Yacht" className="id-div">
                <h5 className="text-primary">Yacht Services</h5>
                <div className="form-row">
                    <div className="col-sm-6 col-lg-12">
                        <div className="table-responsive">
                            <table className="table table-bordered table-striped">
                                <tbody>
                                    <tr>
                                        <th colSpan="2" className="text-center">National Hospital Lahore</th>
                                    </tr>
                                    <tr>
                                        <th>Service Type</th>
                                        <td>Commercial</td>
                                    </tr>
                                    <tr>
                                        <th>Category</th>
                                        <td>Health</td>
                                    </tr>
                                    <tr>
                                        <th>SubCategory</th>
                                        <td>Hospitals</td>
                                    </tr>
                                    <tr>
                                        <th>Service Attachments</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th>Service Description</th>
                                        <td>National Hospital Lahore is a very good hospital but the problem is that they will charge you a lot of money and will almost rip you off. So think twice before going there.</td>
                                    </tr>
                                    <tr>
                                        <th>Pricing</th>
                                        <td>$50</td>
                                    </tr>
                                    <tr>
                                        <th>Contact Number</th>
                                        <td>+923229499463</td>
                                    </tr>
                                    <tr>
                                        <th>Average Ratings</th>
                                        <td>1.00</td>
                                    </tr>
                                    <tr>
                                        <th>Total Ratings</th>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th>Time</th>
                                        <td>8:00 - 0:00</td>
                                    </tr>
                                    <tr>
                                        <th>Status</th>
                                        <td>Pending</td>
                                    </tr>
                                    <tr>
                                        <th>Ratings</th>
                                        <td><Link to="/ratings">View Ratings</Link></td>
                                    </tr>
                                    <tr>
                                        <th>Actions</th>
                                        <td>
                                            <Link to="/edit_service">Edit</Link>
                                            <Link to="Delete" className="text-danger ml-2">Delete</Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <button type="button" className="page-link" tabIndex="-1">Previous</button>
                        </li>
                        <li className="page-item active"><button type="button" className="page-link">1</button></li>
                        <li className="page-item"><button type="button" className="page-link">2</button></li>
                        <li className="page-item"><button type="button" className="page-link">3</button></li>
                        <li className="page-item">
                            <button type="button" className="page-link">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
import { users } from "./api/data";
import "bootstrap/dist/css/bootstrap.min.css";

const UsersPage = () => {
  return (
    <div>
      <div className="container">
        <div className="d-flex gap-2 justify-content-center text-center pt-3">
          <input
            className="form-control w-100"
            type="search"
            placeholder="Search ..."
            // onChange={searchParams}
          />
          <select className="form-select w-25 bg-secondary text-white">
            <option value="Level">Select a level</option>
            <option value="Junior">Junior</option>
            <option value="Middle">Middle</option>
            <option value="Senior">Senior</option>
          </select>
          <select className="form-select w-25 bg-success text-white">
            <option value="Level">Select your country</option>
            <option value="Uzbekistan">Uzbekistan</option>
            <option value="USA">USA</option>
            <option value="Germany">Germany</option>
            <option value="Russia">Russia</option>
            <option value="UK">UK</option>
          </select>
          <button className="btn col-1 btn-primary w-auto ">Add Student</button>
        </div>
        {users.length > 0 && (
          <div className="mt-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Surname</th>
                  <th scope="col">Country</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Position</th>
                  <th scope="col">Type of jobs</th>
                  <th scope="col">Salary($)</th>
                  <th scope="col">Married</th>
                  <th className="text-end mt-4">Activity</th>
                </tr>
              </thead>
              {users.length > 0 && (
                <tbody>
                  {users.map((users, i) => (
                    <>
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{users.name}</td>
                        <td>{users.surname}</td>
                        <td>{users.country}</td>
                        <td>{users.dateOfBirth}</td>
                        <td>{users.position}</td>
                        <td>{users.jobType}</td>
                        <td>{users.salary}</td>
                        <td>{users.married ? "✅" : "❌"}</td>
                        <td className="d-flex gap-2 justify-end">
                          <button className="btn btn-primary">Edit</button>
                          <button
                            // onClick={() =>
                            //   confirm("Are you sure you want to delete ❌")
                            //     ? deleteUser(users.id)
                            //     : false
                            // }

                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
export default UsersPage;

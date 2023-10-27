import PropTypes from 'prop-types';

const BasicTable = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Birthday</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                        <td>{item.dob}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

BasicTable.propTypes = {
    data: PropTypes.array.isRequired,
};
export default BasicTable;

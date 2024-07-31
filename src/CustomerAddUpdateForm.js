export function CustomerAddUpdateForm(parameters) {
    return (
        <table className="customer-table-editor">
            <caption><b>{parameters.mode}</b></caption>
            <tbody>
                <tr>
                <td>Name:</td>
                <td><input 
                    type="text" 
                    name="name"
                    placeholder="Some Person" 
                    onChange={ (e) => parameters.handleInputChange(e) }
                    value={parameters.formObject.name} 
                /></td>
                </tr>
                <tr>
                <td>Email:</td>
                <td><input 
                    type="email"
                    name="email"
                    placeholder="someone@email.com" 
                    onChange={ (e) => parameters.handleInputChange(e) }
                    value={parameters.formObject.email} 
                /></td>
                </tr>
                <tr>
                <td>Pass:</td>
                <td><input 
                    type="text" 
                    name="password"
                    placeholder="supersecurepassword" 
                    onChange={ (e) => parameters.handleInputChange(e) }
                    value={parameters.formObject.password} 
                /></td>
                </tr>
                <tr>
                <td colSpan="2">
                    <button onClick={parameters.onDeleteClick} className="button delete-button">Delete</button>
                    <button onClick={parameters.onSaveClick} className="button save-button">Save</button>
                    <button onClick={parameters.onCancelClick} className="button cancel-button">Cancel</button>
                </td>
                </tr>
            </tbody>
        </table>
    );
}
import React, { useState } from "react";

function App() {
const [formData, setFormData] = useState({
name: "",
email: "",
password: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleSubmit = (e) => {
e.preventDefault();
alert(JSON.stringify(formData));
setFormData({ name: "", email: "", password: "" });
};

return (
<form onSubmit={handleSubmit}>
<input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
<input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
<input name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
<button type="submit">Submit</button>
</form>
);
}

export default App;
function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    
    this.getName = () => {
        return this.name;
    }
    this.getId = () => {
        return this.id;
    }
    this.getEmail = () => {
        return this.email;
    }
    this.getRole = () => {
        return this.role || "employee";
    }
}

module.exports = Employee;
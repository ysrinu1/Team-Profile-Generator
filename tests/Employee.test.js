const Employee = require("../lib/Employee");

test("Create employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Employee Name", () => {
    const name = "AdamGlichrist";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Employee ID", () => {
    const empId = 412;
    const employeeInstance = new Employee("AdamGlichrist", empId);
    expect(employeeInstance.empId).toBe(empId);
})

test("Employee eMail.", () => {
    const email = "AdamGlichrist@org.net";
    const employeeInstance = new Employee("AdamGlichrist", 412, email);
    expect(employeeInstance.email).toBe(email);
})

test("Role Test", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("AdamGlichrist", 412, "AdamGlichrist@org.net");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
})


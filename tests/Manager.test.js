const Manager = require("../lib/Manager");

test("Create GitHub", () => {
    const officeNum = "555-BASE-BAL";
    const employeeInstance = new Manager("JohnSmith", 42, "JohnSmith@org.net", officeNum);
    expect(employeeInstance.officeNum).toBe(officeNum);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("JohnSmith", 42, "JohnSmith@org.net", "555-BASE-BAL");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
});
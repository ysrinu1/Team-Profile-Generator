const Intern = require("../lib/Intern");

test("Create GitHub", () => {
    const school = "Cumberland";
    const employeeInstance = new Intern("Matrickhello", 42, "Matrickhello@org.net", school);
    expect(employeeInstance.school).toBe(school);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Matrickhello", 42, "Matrickhello@org.net", "Cumberland");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
});
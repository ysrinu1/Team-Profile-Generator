const Engineer = require("../lib/Engineer");

test("GitHub ID", () => {
    const githubId = "Github89";
    const employeeInstance = new Engineer("AdamGlichrist", 42, "AdamGlichrist@org.net", githubId);
    expect(employeeInstance.githubId).toBe(githubId);
});

test("Test Role", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("AdamGlichrist", 42, "AdamGlichrist@org.net", "Github89");
    expect(employeeInstance.getEmpRole()).toBe(returnValue);
});
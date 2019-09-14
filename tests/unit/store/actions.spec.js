import actions from "@/store/actions.js";

describe("resetSalaries", () => {
  it("reset all salaries", async () => {
    const commit = jest.fn();

    actions.resetSalaries({ commit });

    expect(commit).toHaveBeenCalledTimes(2);
    expect(commit).toHaveBeenNthCalledWith(1, "setMinSalary", null);
    expect(commit).toHaveBeenNthCalledWith(2, "setMaxSalary", null);
  });
});

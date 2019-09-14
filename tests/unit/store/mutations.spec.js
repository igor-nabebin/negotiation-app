import mutations from "@/store/mutations.js";

describe("setMinSalary", () => {
  it("sets minSalary", () => {
    const state = {
      minSalary: null
    };

    mutations.setMinSalary(state, 42);

    expect(state).toEqual({
      minSalary: 42
    });
  });
});

describe("setMaxSalary", () => {
  it("sets maxSalary", () => {
    const state = {
      maxSalary: null
    };

    mutations.setMaxSalary(state, 42);

    expect(state).toEqual({
      maxSalary: 42
    });
  });
});

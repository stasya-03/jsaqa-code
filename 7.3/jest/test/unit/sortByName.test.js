const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  test("With dublicate names should return 0", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Гарри Поттер",
    ];

    const expected = [
      "Властелин Колец",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);

  });
});

import { transformUrl } from "../src/components/qrc-generator/url-transformer";

const inputUrlPrefix = "https://cyprus.ncsa.illinois.edu/clowder/";
const outputUrlPrefix = "wikar.co/";
let testCases: string[][];

beforeEach(() => {
  testCases = [
    ["datasets/Z6pYO94QBc9XN41", "?d=Z6pYO94QBc9XN41"],
    ["collection/wZGeh05xo3W", "?c=wZGeh05xo3W"],
    ["spaces/3QR4u6e8eRS", "?s=3QR4u6e8eRS"],
    ["prefab/eiU3YeYxc27", "?p=eiU3YeYxc27"],
    ["files/5S0qrJw4TTHq", "?f=5S0qrJw4TTHq"],
  ];
});

describe("URL transformer tests", () => {
  it("should transform urls", () => {
    for (const testCase of testCases) {
      //console.log(testCase)
      const result = transformUrl(inputUrlPrefix + testCase[0]);
      expect(result).toEqual(outputUrlPrefix + testCase[1]);
    }
  });
  it("should ignore query string", () => {
    const testCase = testCases[0];
    testCase[0] += "?key=2c4hewrc1jTQ";
    const result = transformUrl(inputUrlPrefix + testCase[0]);
    expect(result).toEqual(outputUrlPrefix + testCase[1]);
  });
  it("should ignore additional subdirectories", () => {
    const testCase = testCases[0];
    testCase[0] += "/B1ISu7d0m996/wS5zQztP55Ka";
    const result = transformUrl(inputUrlPrefix + testCase[0]);
    expect(result).toEqual(outputUrlPrefix + testCase[1]);
  });
});

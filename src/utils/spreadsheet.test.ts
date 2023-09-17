import { mock } from "jest-mock-extended";
import { getOrInsertSheet } from "./spreadsheet";

describe("getOrInsertSheet 関数は", () => {
  it("シートが存在する場合はそのシートを返す", () => {
    const spreadsheet = mock<GoogleAppsScript.Spreadsheet.Spreadsheet>();
    const sheet = mock<GoogleAppsScript.Spreadsheet.Sheet>();

    spreadsheet.getSheetByName.mockReturnValue(sheet);
    SpreadsheetApp.getActiveSpreadsheet = jest.fn().mockReturnValue(spreadsheet);

    const sheetName = "存在するシート名";
    expect(getOrInsertSheet(sheetName)).toBe(sheet);
    expect(spreadsheet.getSheetByName).toHaveBeenCalledWith(sheetName);
  });

  it("シートが存在しない場合は新規作成して返す", () => {
    const spreadsheet = mock<GoogleAppsScript.Spreadsheet.Spreadsheet>();
    const sheet = mock<GoogleAppsScript.Spreadsheet.Sheet>();

    spreadsheet.getSheetByName.mockReturnValue(null);
    spreadsheet.insertSheet.mockReturnValue(sheet);
    SpreadsheetApp.getActiveSpreadsheet = jest.fn().mockReturnValue(spreadsheet);

    const sheetName = "存在しないシート名";
    expect(getOrInsertSheet(sheetName)).toBe(sheet);
    expect(spreadsheet.getSheetByName).toHaveBeenCalledWith(sheetName);
    expect(spreadsheet.insertSheet).toHaveBeenCalledWith(sheetName);
  });
});

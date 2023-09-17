/**
 * シートを取得する。存在しない場合は作成する。
 *
 * @param name シート名
 */
export function getOrInsertSheet(name: string): GoogleAppsScript.Spreadsheet.Sheet {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(name);

  return sheet ? sheet : spreadsheet.insertSheet(name);
}

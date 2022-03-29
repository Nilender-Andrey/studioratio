import { IRecord } from '../types/type';

class ResultApi {
  private static url = 'http://localhost:5000/api/v1/record/';

  static getRecords = async (isEndless = false) => {
    const url = ResultApi.url + (isEndless ? 'endless' : '');
    const response = await fetch(url);
    const data = await response.json();

    return data;
  };
  static submitRecord = async (data: IRecord) => {
    await fetch(ResultApi.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
  };
}

export default ResultApi;

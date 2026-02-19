import { heroApi } from '../api/hero.api';
import type { ISummaryInformationResponse } from '../models/get-summary-information.response';

export const getSummaryAction = async () => {
  const { data } = await heroApi.get<ISummaryInformationResponse>('/summary');

  return data;
};
